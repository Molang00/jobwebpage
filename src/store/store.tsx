import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import mainMenu, { MainMenuState, initialMainMenuState } from './modules/mainMenu';
import subMenu, { SubMenuState, initialSubMenuState } from './modules/subMenu';

export interface RootState {
  mainMenu: MainMenuState;
  subMenu: SubMenuState;
}

const rootReducer = combineReducers<RootState>({
  mainMenu,
  subMenu
});

const initialRootState = {
  mainMenu: initialMainMenuState,
  subMenu: initialSubMenuState
};

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, initialRootState, applyMiddleware(epicMiddleware));

export default store;
