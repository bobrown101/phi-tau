import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFound from './containers/NotFound';
import Rush from './containers/Rush';
import LocalHistory from './containers/LocalHistory';
import NationalHistory from './containers/NationalHistory';
import ContactPage from './containers/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="local-history" component={LocalHistory}/>
    <Route path="national-history" component={NationalHistory}/>
    <Route path="rush" component={Rush}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
