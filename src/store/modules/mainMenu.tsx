import { set, lensProp } from 'ramda';
import { AnyAction } from 'redux';

export enum MainMenu {
  JOBINFO,
  COURSE,
  GETJOB,
  SES,
  BBS,
  DEFAULT
}

export enum MainMenuActionTypes {
  SET_ACTIVE_MAIN_MENU = 'menu/SET_ACTIVE_MAIN_MENU'
}

export const mainMenuActions = {
  setActiveMainMenu: (payload: MainMenu) => ({
    type: MainMenuActionTypes.SET_ACTIVE_MAIN_MENU,
    payload
  })
};

export interface MainMenuState {
  activeMainMenu: MainMenu;
}

export const initialMainMenuState: MainMenuState = {
  activeMainMenu: MainMenu.JOBINFO
};

export interface MainMenuAction extends AnyAction {
  type: MainMenuActionTypes;
  payload: MainMenu;
}

export default (state: MainMenuState = initialMainMenuState, action: MainMenuAction | {}) => {
  switch ((action as MainMenuAction).type) {
    case MainMenuActionTypes.SET_ACTIVE_MAIN_MENU:
      return set<MainMenuState, MainMenu>(lensProp('activeMainMenu'), (action as MainMenuAction).payload, state);
    default:
      return state;
  }
};
