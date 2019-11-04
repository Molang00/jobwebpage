import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Routes from './Routes';

const Header = loadable(() => import(/* webpackChunkName: "Header" */ './components/layout/Header'));
const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ './components/layout/Footer'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */ './pages'));

const App = () => {
  return (
    <div>
      <Helmet>
        <title>{`취업 및 진로지원센터`}</title>
      </Helmet>
      <Route path="/" render={() => <Header />} />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
