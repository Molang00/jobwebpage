import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

const Header = loadable(() => import(/* webpackChunkName: "Header" */ 'src/components/Header'));
const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ 'src/components/Footer'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */ 'src/pages'));
const Support = loadable(() => import(/* webpackChunkName: "Support" */ 'src/pages/Support'));

const App = () => {
	return (
		<div>
			<Helmet>
				<title>{`취업 및 진로지원센터`}</title>
			</Helmet>
			<Route path="/" render={() => <Header />} />
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route path="/support" render={() => <Support />} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
