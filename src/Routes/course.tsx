import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { mainMenuActions, MainMenu } from '../store/modules/mainMenu';
import { subMenuActions, Course, SubMenu } from '../store/modules/subMenu';

const PlanningPage = loadable(() => import(/* webpackChunkName: "PlanningPage" */ '../pages/course/planning'));
const KcesaPage = loadable(() => import(/* webpackChunkName: "KcesaPage" */ '../pages/course/kcesa'));
const CounselingPage = loadable(() => import(/* webpackChunkName: "CounselingPage" */ '../pages/course/counseling'));

const CourseRoutes = () => {
  const dispatch = useDispatch();

  const setMenu = (mainMenu: MainMenu, subMenu: SubMenu) => {
    dispatch(mainMenuActions.setActiveMainMenu(mainMenu));
    dispatch(subMenuActions.setActiveSubMenu(subMenu));
  };

  return (
    <React.Fragment>
      <Route
        path="/course/planning"
        render={() => {
          setMenu(MainMenu.COURSE, Course.PLANNING);
          return <PlanningPage />;
        }}
      />
      <Route
        path="/course/kcesa"
        render={() => {
          setMenu(MainMenu.COURSE, Course.KCESA);
          return <KcesaPage />;
        }}
      />
      <Route
        path="/course/counseling"
        render={() => {
          setMenu(MainMenu.COURSE, Course.COUNSELING);
          return <CounselingPage />;
        }}
      />
    </React.Fragment>
  );
};

export default CourseRoutes;
