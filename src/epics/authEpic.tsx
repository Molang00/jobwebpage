import axios from 'axios';
import jwt from 'jsonwebtoken';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoginForm, UserSchema, SignUpForm } from '@postech-ses/job-core';
import { ofType, Epic } from 'redux-observable';
import { AuthActionTypes, AuthAction, authActions } from '../store/modules/auth';
import { REACT_APP_API_URL } from '../config';
import { authenticatedAxios } from '../utils/auth.util';

const fetchPostToken = (form: LoginForm) =>
  axios
    .post(`${REACT_APP_API_URL}/auth/login`, form)
    .then(response => {
      const token: string = response.data;
      window.localStorage.setItem('ses-login-token', token);
      const payload = jwt.decode(token, { json: true }) as Record<string, any>;
      return payload['user'] as UserSchema;
    })
    .catch(error => {
      throw error;
    });

const fetchResponse = (form: SignUpForm) =>
  axios
    .post(`${REACT_APP_API_URL}/auth/sign-up`, form)
    .then(response => {
      const status: number = response.status;
      if (status == 201) {
        const success = true;
        return success as Boolean;
      } else {
        const success = false;
        return success as Boolean;
      }
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

export const signupEpic: Epic = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.START_SIGNUP),
    switchMap((action: AuthAction) =>
      from(fetchResponse(action.payload as SignUpForm)).pipe(
        map(success => (success ? alert('회원가입에 성공하였습니다.') : alert('회원가입에 실패하였습니다.'))),
        catchError(() => {
          alert('잘못된 요청입니다.');
          return of(authActions.endLogoutWithSuccess(true));
        })
      )
    )
  );

const fetchDeleteToken = () =>
  authenticatedAxios('auth/logout', { method: 'DELETE' }).then(() => {
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
