import React, { Component } from 'react';
import { NavButton } from './index.js';
import '../../styles/nav/NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.renderNavButtons = this.renderNavButtons.bind(this)
  }

  renderNavButtons() {
    return this.props.catTitles.props.map(catTitles =>
      <NavButton id={catTitles} text={catTitles} key={catTitles} />);
  }

  render() {
    console.log(this.props.catTitles.props)
    return (
      <div id='nav-buttons-container'>
         {this.renderNavButtons()}
      </div>
    );
  }
}

export { NavBar };
