import React from 'react';
import { Link } from 'react-router';


class Dashboard extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <Link to='/' className="navbar-brand">La Bodega</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li><Link to='/dashboard'><i className="fas fa-th"></i></Link></li>
            <li><Link to='/'><i className="fas fa-shopping-cart"></i></Link></li>
            <li><Link to='/'><i className="fas fa-sign-out-alt"></i></Link></li>
          </ul>
        </div>
      </nav>
      </div>

    )
  }
}

export default Dashboard;
