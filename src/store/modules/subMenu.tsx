import { set, lensProp } from 'ramda';
import { AnyAction } from 'redux';
import { MainMenu } from './mainMenu';

export interface SubMenuItem {
  name: string;
  pathname: string;
}

const jobInfoList: SubMenuItem[] = [
  {
    name: '인사말',
    pathname: '/jobinfo/greetings'
  },
  {
    name: '조직',
    pathname: '/jobinfo/organization'
  },
  {
    name: '역할',
    pathname: '/jobinfo/role'
  }
];

const courseInfoList: SubMenuItem[] = [
  {
    name: '단계별 진로설계',
    pathname: '/course/planning'
  },
  {
    name: '핵심역량 진단',
    pathname: '/course/kcesa'
  },
  {
    name: '심리검사 및 진로상담',
    pathname: '/course/counseling'
  }
];

const getJobInfoList: SubMenuItem[] = [
  {
    name: '채용상담 및 박람회',
    pathname: '/getjob/expo'
  },
  {
    name: '인턴십 프로그램',
    pathname: '/getjob/internship'
  },
  {
    name: '진로 및 취업 길라잡이',
    pathname: '/getjob/guide'
  }
];

const sesInfoList: SubMenuItem[] = [
  {
    name: 'SES 소개',
    pathname: '/ses/aboutses'
  },
  {
    name: 'SES 실적',
    pathname: '/ses/sesresults'
  },
  {
    name: '체험수기',
    pathname: '/ses/reviews'
  }
];

const bbsInfoList: SubMenuItem[] = [
  {
    name: '공지사항',
    pathname: '/bbs/notice'
  },
  {
    name: '채용공고',
    pathname: '/bbs/announcement'
  },
  {
    name: '인턴십',
    pathname: '/bbs/intern'
  },
  {
    name: '채용행사',
    pathname: '/bbs/party'
  }
];

const defaultMenuList: SubMenuItem[] = [
  {
    name: '로그인',
    pathname: '/login'
  }
];

export const menuList = {
  [MainMenu.JOBINFO]: jobInfoList,
  [MainMenu.COURSE]: courseInfoList,
  [MainMenu.GETJOB]: getJobInfoList,
  [MainMenu.SES]: sesInfoList,
  [MainMenu.BBS]: bbsInfoList,
  [MainMenu.DEFAULT]: defaultMenuList
};

export enum JobInfo {
  GREETINGS,
  ORGANIZATION,
  ROLE
}

export enum Course {
  PLANNING = 10,
  KCESA,
  COUNSELING
}

export enum GetJob {
  EXPO = 20,
  INTERNSHIP,
  GUIDE
}

export enum SES {
  ABOUTSES = 30,
  SESRESULTS,
  REVIEWS
}

export enum BBS {
  NOTICE = 40,
  ANNOUNCEMENT,
  INTERN,
  PARTY
}

export enum Default {
  LOGIN = 50
}

export type SubMenu = JobInfo | Course | GetJob | SES | BBS | Default;

export enum SubMenuActionTypes {
  SET_ACTIVE_SUB_MENU = 'menu/SET_ACTIVE_SUB_MENU'
}

export const subMenuActions = {
  setActiveSubMenu: (payload: SubMenu) => ({
    type: SubMenuActionTypes.SET_ACTIVE_SUB_MENU,
    payload
  })
};

export interface SubMenuState {
  readonly activeSubMenu: SubMenu;
}

export interface SubMenuAction extends AnyAction {
  type: SubMenuActionTypes;
  payload: SubMenu;
}

export const initialSubMenuState: SubMenuState = {
  activeSubMenu: JobInfo.GREETINGS
};

export default (state: SubMenuState = initialSubMenuState, action: SubMenuAction | {}) => {
  switch ((action as SubMenuAction).type) {
    case SubMenuActionTypes.SET_ACTIVE_SUB_MENU:
      return set<SubMenuState, SubMenu>(lensProp('activeSubMenu'), (action as SubMenuAction).payload, state);
    default:
      return state;
  }
};
