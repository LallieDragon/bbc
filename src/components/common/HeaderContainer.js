import React, { Component } from 'react';
import '../../styles/common/HeaderContainer.css';
import { Link } from 'react-router-dom';
import { NavButton } from '../nav';
import logo from '../../images/logo.png';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        'About',
        'Projects'
        ]
      }
    this.renderNavButtons = this.renderNavButtons.bind(this)
  }

  renderNavButtons() {
    return this.state.pages.map(pages =>
      <Link to={`/${ pages }`} key={pages}>
        <NavButton id={pages} text={pages} />
      </Link>
    );
  }

  render() {
    return (
      <div id='header-container'>
        <div id='logo-container'>
          <img src={ logo } alt={ 'logo' }/>
        </div>

        <nav>
          {this.renderNavButtons()}
        </nav>
      </div>
    )
  }
}

export default HeaderContainer;
