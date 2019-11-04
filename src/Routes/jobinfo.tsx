import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { mainMenuActions, MainMenu } from '../store/modules/mainMenu';
import { subMenuActions, JobInfo, SubMenu } from '../store/modules/subMenu';

const GreetingPage = loadable(() => import(/* webpackChunkName: "GreetingPage" */ '../pages/jobInfo/greetings'));
const OrganizationPage = loadable(() => import(/* webpackChunkName: "OrganizationPage" */ '../pages/jobInfo/organization'));
const RolePage = loadable(() => import(/* webpackChunkName: "RolePage" */ '../pages/jobInfo/role'));

const JobInfoRoutes = () => {
  const dispatch = useDispatch();

  const setMenu = (mainMenu: MainMenu, subMenu: SubMenu) => {
    dispatch(mainMenuActions.setActiveMainMenu(mainMenu));
    dispatch(subMenuActions.setActiveSubMenu(subMenu));
  };

  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to="/jobinfo/greetings" />
      </Route>
      <Route
        path="/jobinfo/greetings"
        render={() => {
          setMenu(MainMenu.JOBINFO, JobInfo.GREETINGS);
          return <GreetingPage />;
        }}
      />
      <Route
        path="/jobinfo/organization"
        render={() => {
          setMenu(MainMenu.JOBINFO, JobInfo.ORGANIZATION);
          return <OrganizationPage />;
        }}
      />
      <Route
        path="/jobinfo/role"
        render={() => {
          setMenu(MainMenu.JOBINFO, JobInfo.ROLE);
          return <RolePage />;
        }}
      />
    </React.Fragment>
  );
};

export default JobInfoRoutes;
