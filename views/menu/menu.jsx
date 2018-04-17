import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from './routes.jsx';

const Menu = () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
  <Link to={routes.LOG_IN} className="navbar-brand" >La Bodega</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li><Link to={routes.DASHBOARD}><i className="fas fa-th"></i></Link></li>
      <li><a><i className="fas fa-shopping-cart"><span className="badge badge-pill badge-danger">2</span></i></a></li>
      <li><i className="fas fa-sign-out-alt"></i></li>
    </ul>
  </div>
</nav>

export default Menu;
