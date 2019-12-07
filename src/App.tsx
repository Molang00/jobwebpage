import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';

import { authActions } from './store/modules/auth';
import { decodeToken, authenticatedAxios } from './utils/auth.util';
import loadable from '@loadable/component';
import Routes from './Routes';
import { primeflex } from './styles/primeflex';

const Header = loadable(() => import(/* webpackChunkName: "Header" */ './components/layout/Header'));
const ImgBox = loadable(() => import(/* webpackChunkName: "ImgBox" */ './components/layout/ImgBox'));
const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ './components/layout/Footer'));

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  React.useEffect(() => {
    authenticatedAxios('auth/verify', {
      method: 'GET'
    })
      .then(res => {
        if (res.data === true) {
          const { user } = decodeToken(window.localStorage.getItem('ses-login-token'));
          dispatch(authActions.endLoginWithSuccess(user));
        } else {
          throw Error();
        }
      })
      .catch(error => dispatch(authActions.endLogoutWithSuccess(true)));
  }, []);

  return (
    <div>
      <Helmet>
        <title>취업 및 진로지원센터</title>
        <style>{primeflex}</style>
      </Helmet>
      <Header />
      <ImgBox />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
