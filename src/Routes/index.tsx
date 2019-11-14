import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { mainMenuActions, MainMenu } from '../store/modules/mainMenu';
import { subMenuActions, JobInfo, Course, GetJob, SES, SubMenu } from '../store/modules/subMenu';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ '../pages'));
const GreetingPage = loadable(() => import(/* webpackChunkName: "GreetingPage" */ '../pages/jobInfo/greetings'));
const OrganizationPage = loadable(() =>
  import(/* webpackChunkName: "OrganizationPage" */ '../pages/jobInfo/organization')
);
const RolePage = loadable(() => import(/* webpackChunkName: "RolePage" */ '../pages/jobInfo/role'));
const PlanningPage = loadable(() => import(/* webpackChunkName: "PlanningPage" */ '../pages/course/planning'));
const KcesaPage = loadable(() => import(/* webpackChunkName: "KcesaPage" */ '../pages/course/kcesa'));
const CounselingPage = loadable(() => import(/* webpackChunkName: "CounselingPage" */ '../pages/course/counseling'));
const ExpoPage = loadable(() => import(/* webpackChunkName: "ExpoPage" */ '../pages/getJob/expo'));
const InternshipPage = loadable(() => import(/* webpackChunkName: "InternshipPage" */ '../pages/getJob/internship'));
const GuidePage = loadable(() => import(/* webpackChunkName: "GuidePage" */ '../pages/getJob/guide'));
const AboutSesPage = loadable(() => import(/* webpackChunkName: "AboutSesPage" */ '../pages/ses/aboutses'));
const SesResultsPage = loadable(() => import(/* webpackChunkName: "SesResultsPage" */ '../pages/ses/sesresults'));

const Routes = () => {
  const dispatch = useDispatch();

  const setMenu = (mainMenu: MainMenu, subMenu: SubMenu) => {
    dispatch(mainMenuActions.setActiveMainMenu(mainMenu));
    dispatch(subMenuActions.setActiveSubMenu(subMenu));
  };

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
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
      <Route
        path="/getjob/expo"
        render={() => {
          setMenu(MainMenu.GETJOB, GetJob.EXPO);
          return <ExpoPage />;
        }}
      />
      <Route
        path="/getjob/internship"
        render={() => {
          setMenu(MainMenu.GETJOB, GetJob.INTERNSHIP);
          return <InternshipPage />;
        }}
      />
      <Route
        path="/getjob/guide"
        render={() => {
          setMenu(MainMenu.GETJOB, GetJob.GUIDE);
          return <GuidePage />;
        }}
      />
      <Route
        path="/ses/sesresults"
        render={() => {
          setMenu(MainMenu.SES, SES.ABOUTSES);
          return <SesResultsPage />;
        }}
      />
      <Route
        path="/ses/aboutses"
        render={() => {
          setMenu(MainMenu.SES, SES.ABOUTSES);
          return <AboutSesPage />;
        }}
      />
    </Switch>
  );
};

export default Routes;
