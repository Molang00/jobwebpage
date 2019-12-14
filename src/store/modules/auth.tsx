import { set, lensProp, pipe } from 'ramda';
import { AnyAction } from 'redux';
import { LoginForm, UserSchema, SignUpForm } from '@postech-ses/job-core';

export enum AuthActionTypes {
  START_SIGNUP = 'auth/START_SIGNUP',
  START_LOGIN = 'auth/START_LOGIN',
  END_LOGIN_WITH_SUCCESS = 'auth/END_LOGIN_WITH_SUCCESS',
  START_LOGOUT = 'auth/START_LOGOUT',
  END_LOGOUT_WITH_SUCCESS = 'auth/END_LOGOUT_WITH_SUCCESS'
}

export const authActions = {
  startSignup: (payload: SignUpForm) => ({
    type: AuthActionTypes.START_SIGNUP,
    payload
  }),
  startLogin: (payload: LoginForm) => ({
    type: AuthActionTypes.START_LOGIN,
    payload
  }),
  endLoginWithSuccess: (payload: UserSchema) => ({
    type: AuthActionTypes.END_LOGIN_WITH_SUCCESS,
    payload
  }),
  startLogout: (payload: boolean) => ({
    type: AuthActionTypes.START_LOGOUT,
    payload
  }),
  endLogoutWithSuccess: (payload: boolean) => ({
    type: AuthActionTypes.END_LOGOUT_WITH_SUCCESS,
    payload
  })
};

export interface AuthState {
  readonly isLogin: boolean;
  readonly userInfo: UserSchema | null;
}

export interface AuthAction extends AnyAction {
  type: AuthActionTypes;
  payload: LoginForm | UserSchema;
}

export const initialAuthState: AuthState = {
  isLogin: false,
  userInfo: null
};

const setStateOnLoginSuccess = (action: AuthAction | {}) =>
  pipe<AuthState, AuthState, AuthState>(
    set<boolean>(lensProp('isLogin'), true),
    set<UserSchema>(lensProp('userInfo'), (action as AuthAction).payload as UserSchema)
  );

const setStateOnLogoutSuccess = pipe<AuthState, AuthState, AuthState>(
  set<boolean>(lensProp('isLogin'), false),
  set<null>(lensProp('userInfo'), null)
);

export default (state: AuthState = initialAuthState, action: AuthAction | {}) => {
  switch ((action as AuthAction).type) {
    case AuthActionTypes.START_SIGNUP:
      return state;
    case AuthActionTypes.START_LOGIN:
      return state;
    case AuthActionTypes.END_LOGIN_WITH_SUCCESS:
      return setStateOnLoginSuccess(action)(state);
    case AuthActionTypes.START_LOGOUT:
      return state;
    case AuthActionTypes.END_LOGOUT_WITH_SUCCESS:
      return setStateOnLogoutSuccess(state);
    default:
      return state;
  }
};
