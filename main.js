import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import Login from './views/login/login.jsx';
import Dashboard from './views/dashboard/dasboard.jsx';
import Menu from './views/menu/menu.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from './routes';

ReactDOM.render(<App />, document.getElementById('app'));
