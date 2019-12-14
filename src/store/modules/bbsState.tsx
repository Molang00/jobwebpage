import { set, lensProp } from "ramda";
import { AnyAction } from "redux";
import { JobBoardPostType } from "@postech-ses/ses-core";

export enum BbsActionTypes {
  SET_CURRENT_PAGE = "bbs/SET_CURRENT_PAGE",
  SET_LAST_PAGE = "bbs/SET_LAST_PAGE",
  SET_BBS_TYPE = "bbs/SET_BBS_TYPE",
  SET_BBS_SITUATION = "bbs/SET_BBS_SITUATION"
}

export enum BbsSituation {
  LIST = "LIST",
  WRITE = "WRITE",
  VIEW = "VIEW"
}

export const BbsActions = {
  setCurrentPage: (payload: number) => ({
    type: BbsActionTypes.SET_CURRENT_PAGE,
    payload
  }),
  setLastPage: (payload: number) => ({
    type: BbsActionTypes.SET_LAST_PAGE,
    payload
  }),
  setBbsType: (payload: JobBoardPostType) => ({
    type: BbsActionTypes.SET_BBS_TYPE,
    payload
  }),
  setBbsSituation: (payload: BbsSituation) => ({
    type: BbsActionTypes.SET_BBS_SITUATION,
    payload
  })
};

export interface BBSState {
  currentPage: number;
  lastPage: number;
  subMenu: JobBoardPostType;
  bbsSituation: BbsSituation;
}

export const initialBbsState: BBSState = {
  currentPage: 0,
  lastPage: 0,
  subMenu: JobBoardPostType.NOTICE,
  bbsSituation: BbsSituation.LIST
};

export interface BbsAction extends AnyAction {
  type: BbsActionTypes;
  payload: number;
}

export default (state: BBSState = initialBbsState, action: BbsAction | {}) => {
  switch ((action as BbsAction).type) {
    case BbsActionTypes.SET_CURRENT_PAGE:
      return set<BBSState, number>(
        lensProp("currentPage"),
        (action as BbsAction).payload,
        state
      );
    case BbsActionTypes.SET_LAST_PAGE:
      return set<BBSState, number>(
        lensProp("lastPage"),
        (action as BbsAction).payload,
        state
      );
    case BbsActionTypes.SET_BBS_TYPE:
      return set<BBSState, number>(
        lensProp("subMenu"),
        (action as BbsAction).payload,
        state
      );
    case BbsActionTypes.SET_BBS_SITUATION:
      return set<BBSState, number>(
        lensProp("bbsSituation"),
        (action as BbsAction).payload,
        state
      );
    default:
      return state;
  }
};
