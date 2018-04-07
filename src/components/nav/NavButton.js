import React, { Component } from 'react';
import '../../styles/nav/NavButton.css'
import { PropTypes } from 'prop-types';

class NavButton extends Component {
  render() {
    return (
      <div className="nav-buttons">
        { this.props.text }
      </div>
    )
  }
}

NavButton.propTypes = {
  text: PropTypes.string
}

export { NavButton };
