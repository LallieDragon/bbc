import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import '../../styles/nav/NavBar.css';

class NavBar extends Component {
  render() {
    console.log( this.data )
    return (
      <div className='nav-bar'>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <nav>
            <NavLink className='navlink homelink' exact to='/'>
              <img id='logo' src={require('../../images/logo.png')} alt='logo' />
            </NavLink>
          </nav>
        </Router>
      </div>
    )
  }
}

export default NavBar;
