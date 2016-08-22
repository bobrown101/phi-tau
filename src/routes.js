import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFound from './containers/NotFound';
import Rush from './containers/Rush';
import LaserTagHome from'./containers/LaserTagHome';
import LocalHistory from './containers/LocalHistory';
import NationalHistory from './containers/NationalHistory';
import ContactPage from './containers/Contact';
import Admin from './containers/Admin';
import Event from './containers/Admin/Event';
import Login from './containers/Login';
import Vote from './containers/Vote';
import Poll from './containers/Poll';
import {requireAuthentication} from './components/AuthenticatedComponent';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="local-history" component={LocalHistory}/>
    <Route path="national-history" component={NationalHistory}/>
    <Route path="rush" component={Rush}/>
    <Route path="lasertag" component={LaserTagHome}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="admin-dashboard" component={requireAuthentication(Admin)}/>
    <Route path="event/:eventID" component={requireAuthentication(Event)}/>
    <Route path="poll/:eventID/:pollID" component={requireAuthentication(Poll)} />
    <Route path="login" component={Login}/>
    <Route path="vote" component={Vote}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
