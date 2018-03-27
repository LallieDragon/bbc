import React from 'react';
import NavBar from './NavBar';
import '../../styles/nav/NavContainer.css'

const NavContainer = (data) => {
  console.log(data)
  return (
    <div id='header-nav'>
      <NavBar />
    </div>
  );
}

export { NavContainer }
