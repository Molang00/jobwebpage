import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import mainMenu, { MainMenuState, initialMainMenuState } from './modules/mainMenu';
import subMenu, { SubMenuState, initialSubMenuState } from './modules/subMenu';
import auth, { AuthState, initialAuthState } from './modules/auth';
import { loginEpic, logoutEpic, signupEpic } from '../epics/authEpic';

export interface RootState {
  mainMenu: MainMenuState;
  subMenu: SubMenuState;
  auth: AuthState;
}

const rootReducer = combineReducers<RootState>({
  mainMenu,
  subMenu,
  auth
});

const initialRootState = {
  mainMenu: initialMainMenuState,
  subMenu: initialSubMenuState,
  auth: initialAuthState
};

const rootEpic = combineEpics(loginEpic, logoutEpic, signupEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, initialRootState, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
