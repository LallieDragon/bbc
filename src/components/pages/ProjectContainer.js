import React, { Component } from 'react';
import ProjectsCard from './ProjectsCard';

class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <ProjectsCard content={this.props}/>
      </div>
    )
  }
}

export default ProjectContainer
