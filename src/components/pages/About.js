import React, { Component } from 'react';

class About extends Component {

  componentDidMount() {
    console.log(this.props, 'props')
  }
  render() {
    return(
      <h1>Hi</h1>
    )
  }
}

export default About
