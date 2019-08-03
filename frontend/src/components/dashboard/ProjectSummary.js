import React, { Component, Fragment } from "react";

class ProjectSummary extends Component {
  render() {
    const projectContainer = (
      <Fragment>
        <div className="project-table">
          <div className="project-name">Project 1</div>
          <div className="project-week-container">
            <div>Week 1 16 Hours </div>
            <div>Week 2 16 Hours </div>
            <div>Week 3 16 Hours </div>
            <div>Week 4 16 Hours </div>
          </div>
        </div>
      </Fragment>
    );
    return (
      <div className="project-container">
        <span> Project Summary</span>
        <div className="project-list-container">
          {projectContainer}
          {projectContainer}
          {projectContainer}
          {projectContainer}
        </div>
      </div>
    );
  }
}

export default ProjectSummary;
