import axios from 'axios';
import jwt from 'jsonwebtoken';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoginForm, UserSchema } from '@postech-ses/job-core';
import { ofType, Epic } from 'redux-observable';
import { AuthActionTypes, AuthAction, authActions } from '../store/modules/auth';
import { REACT_APP_API_URL } from '../config';
import { authenticatedAxios } from '../utils/auth.util';

const fetchPostToken = (form: LoginForm) =>
  axios
    .post(`${REACT_APP_API_URL}/auth`, form)
    .then(response => {
      const token: string = response.data;
      window.localStorage.setItem('ses-login-token', token);
      const payload = jwt.decode(token, { json: true }) as Record<string, any>;
      return payload['user'] as UserSchema;
    })
    .catch(error => {
      throw error;
    });

export const loginEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.START_LOGIN),
    switchMap((action: AuthAction) =>
      from(fetchPostToken(action.payload as LoginForm)).pipe(
        map(user => (user ? authActions.endLoginWithSuccess(user) : null)),
        catchError(() => {
          alert('잘못된 요청입니다.');
          return of(authActions.endLogoutWithSuccess(true));
        })
      )
    )
  );

const fetchDeleteToken = () =>
  authenticatedAxios('auth', { method: 'DELETE' }).then(() => {
    window.localStorage.removeItem('ses-login-token');
    alert('로그아웃 하였습니다.');
  });

export const logoutEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.START_LOGOUT),
    switchMap(() =>
      from(fetchDeleteToken()).pipe(
        map(() => authActions.endLogoutWithSuccess(true)),
        catchError((err: Error) => of(authActions.endLogoutWithSuccess(false)))
      )
    )
  );
