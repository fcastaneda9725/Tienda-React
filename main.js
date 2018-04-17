import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';
import Login from './views/login/login.jsx';
import Dashboard from './views/dashboard/dasboard.jsx';
import Menu from './views/menu/menu.jsx';

render (
  <Router history={hashHistory}>
    <Route path='/' component={Login} />
    <Route path= '/dashboard' component={Dashboard} />
  </Router>,
  document.getElementById('app')
)
