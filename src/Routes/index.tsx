import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { mainMenuActions, MainMenu } from '../store/modules/mainMenu';
import { subMenuActions, JobInfo, Course, GetJob, SES, BBS, SubMenu, Default } from '../store/modules/subMenu';

const LoginPage = loadable(() => import(/* webpackChunkName: "LoginPage" */ '../pages/login'));
const SignUpPage = loadable(() => import(/* webpackChunkName: "SignUpPage" */ '../pages/signup'));
const ApproveManagePage = loadable(() => import(/* webpackChunkName: "ApproveManagePage" */ '../pages/approveManage'));

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
const ResultStudentExperiencePage = loadable(() =>
  import(/* webpackChunkName: "ResultStudentExperiencePage" */ '../pages/ses/student-experience')
);
const BbsListPage = loadable(() => import(/* webpackChunkName: "BbsListPage" */ '../pages/bbs/list'));
const BbsWritePage = loadable(() => import(/* webpackChunkName: "BbsWritePage" */ '../pages/bbs/write'));
const BbsViewPage = loadable(() => import(/* webpackChunkName: "BbsViewPage" */ '../pages/bbs/view'));

const Routes = () => {
  const dispatch = useDispatch();

  const setMenu = (mainMenu: MainMenu, subMenu: SubMenu) => {
    dispatch(mainMenuActions.setActiveMainMenu(mainMenu));
    dispatch(subMenuActions.setActiveSubMenu(subMenu));
  };

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/jobinfo/greetings" />
      </Route>
      <Route
        path="/login"
        render={() => {
          setMenu(MainMenu.DEFAULT, Default.LOGIN);
          return <LoginPage />;
        }}
      />
      <Route
        path="/sign-up"
        render={() => {
          setMenu(MainMenu.DEFAULT, Default.LOGIN);
          return <SignUpPage />;
        }}
      />
      <Route
        path="/approveManage"
        render={() => {
          setMenu(MainMenu.DEFAULT, Default.LOGIN);
          return <ApproveManagePage />;
        }}
      />
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
        path="/ses/aboutses"
        render={() => {
          setMenu(MainMenu.SES, SES.ABOUTSES);
          return <AboutSesPage />;
        }}
      />
      <Route
        path="/ses/sesresults"
        render={() => {
          setMenu(MainMenu.SES, SES.SESRESULTS);
          return <SesResultsPage />;
        }}
      />
      <Route
        path="/ses/student-experience"
        render={() => {
          setMenu(MainMenu.SES, SES.REVIEWS);
          return <ResultStudentExperiencePage />;
        }}
      />
      <Route
        path="/bbs/list"
        render={() => {
          setMenu(MainMenu.BBS, BBS.JOBPOSTING);
          return <BbsListPage />;
        }}
      />
      <Route
        path="/bbs/write"
        render={() => {
          setMenu(MainMenu.BBS, BBS.JOBPOSTING);
          return <BbsWritePage />;
        }}
      />
      <Route
        path="/bbs/view"
        render={() => {
          setMenu(MainMenu.BBS, BBS.JOBPOSTING);
          return <BbsViewPage />;
        }}
      />
    </Switch>
  );
};

export default Routes;
