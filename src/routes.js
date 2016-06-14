import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFound from './containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="local-history" component={AboutPage}/>
    <Route path="national-history" component={AboutPage}/>
    <Route path="rush" component={AboutPage}/>
    <Route path="contact" component={AboutPage}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
