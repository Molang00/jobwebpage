import React from 'react';
import { Switch } from 'react-router-dom';
import JobInfoRoutes from './jobinfo'
import CourseRoutes from './course'

const Routes = () => {
  return (
    <Switch>
      <JobInfoRoutes />
      <CourseRoutes />
    </Switch>
  );
};

export default Routes;
