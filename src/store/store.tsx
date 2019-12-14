import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import auth, { initialAuthState } from './modules/auth';
import mainMenu, { MainMenuState, initialMainMenuState } from './modules/mainMenu';
import subMenu, { SubMenuState, initialSubMenuState } from './modules/subMenu';
import bbsState, { BBSState, initialBbsState } from './modules/bbsState';
import { loginEpic, logoutEpic, signupEpic } from '../epics/authEpic';
import { AuthState } from './modules/auth';

export interface RootState {
  mainMenu: MainMenuState;
  subMenu: SubMenuState;
  bbsState: BBSState;
  auth: AuthState;
}

const rootReducer = combineReducers<RootState>({
  mainMenu,
  subMenu,
  auth,
  bbsState
});

const initialRootState = {
  mainMenu: initialMainMenuState,
  subMenu: initialSubMenuState,
  auth: initialAuthState,
  bbsState: initialBbsState
};

const rootEpic = combineEpics(loginEpic, logoutEpic, signupEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, initialRootState, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
