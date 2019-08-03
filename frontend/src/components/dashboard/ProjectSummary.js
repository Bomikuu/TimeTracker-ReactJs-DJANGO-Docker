import React, { Component, Fragment } from "react";

class ProjectSummary extends Component {
  render() {
    const projectContainer = (
      <Fragment>
        <div className="project-table">
          <span className="is-table-title">Project 1</span>
          <div className="project-week-container">
            <span className="is-table-week">Week 1 16 Hours </span>
            <span className="is-table-week">Week 1 16 Hours </span>
            <span className="is-table-week">Week 1 16 Hours </span>
          </div>
        </div>
      </Fragment>
    );
    return (
      <div className="project-container">
        <span className="is-module-title"> Project Summary</span>
        <div className="project-list-container">
          {projectContainer}
          {projectContainer}
          {projectContainer}
          {projectContainer}
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
