import React from 'react';
import '../../styles/common/HeaderContainer.css';
import { NavBar } from '../nav';
import logo from '../../images/logo.png';

const HeaderContainer = (props) => {
  return (
    <div id='header-container'>
      <div id='logo-container'>
        <img src={ logo } alt={ 'logo' }/>
      </div>
      <NavBar catTitles={ props }/>
    </div>
  )
}

export default HeaderContainer;
