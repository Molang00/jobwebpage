import React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Routes from './Routes';

const Header = loadable(() => import(/* webpackChunkName: "Header" */ './components/layout/Header'));
const ImgBox = loadable(() => import(/* webpackChunkName: "ImgBox" */ './components/layout/ImgBox'));
const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ './components/layout/Footer'));

const App = () => {
  return (
    <div>
      <Helmet>
        <title>{`취업 및 진로지원센터`}</title>
      </Helmet>
      <Header />
      <ImgBox />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
