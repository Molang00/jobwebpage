import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import auth, { initialAuthState } from './modules/auth';
import mainMenu, { MainMenuState, initialMainMenuState } from './modules/mainMenu';
import subMenu, { SubMenuState, initialSubMenuState } from './modules/subMenu';
import { loginEpic, logoutEpic, signupEpic } from '../epics/authEpic';
import { AuthState } from './modules/auth';

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
