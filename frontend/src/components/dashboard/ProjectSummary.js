import React, { Component, Fragment } from "react";
import { Button } from "antd";
import AddProject from "../layout/AddProject";
import axios from "axios";
import Project from "../../img/project.png";

class ProjectSummary extends Component {
  state = {
    listOfProjects: {},
    visible: false
  };

  componentDidMount() {
    this.getListOfProjects();
  }

  getListOfProjects = () => {
    const url = process.env.REACT_APP_API_BASE_URL + "/project";
    return axios.get(url).then(response => {
      this.setState({ listOfProjects: response.data });
    });
  };

  handleOk = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSubmit = timestamp => {
    console.log(timestamp);
    this.handleOk();
    const url = process.env.REACT_APP_API_BASE_URL + "/create-project";
    axios({
      method: "post",
      url: url,
      headers: {
        "content-type": "application/json"
      },
      data: timestamp
    }).then(res => {
      console.log(res);
      this.getListOfProjects();
    });
  };

  modalState = () => {
    let state = {
      visible: this.state.visible,
      handleOk: this.handleOk,
      handleSubmit: this.handleSubmit
    };

    return state;
  };

  render() {
    let { listOfProjects } = this.state;
    let projectList = [];
    projectList = listOfProjects.length ? (
      Array.from(
        listOfProjects.map(project => {
          return (
            <div key={project.id} className="is-timestamp">
              <a>{project.projectName}</a>
              <span>{project.description}</span>
              <span>{project.status}</span>
            </div>
          );
        })
      )
    ) : (
      <div className="empty-container">
        <img src={Project} className="header-logo" alt="Time Tracker" />
        <div className="is-regular">
          No Projects Added yet. Click Add Project
        </div>
      </div>
    );

    return (
      <Fragment>
        <div className="is-module-title">
          <span>Project Summary</span>
          <Button
            className="button-icon"
            type="primary"
            icon="form"
            onClick={this.handleOk}
          />
        </div>
        <div
          className={
            listOfProjects.length ? "project-list-container" : "recent-empty"
          }
        >
          {projectList}
        </div>
        <AddProject state={this.modalState()} />
      </Fragment>
    );
  }
}

export default ProjectSummary;
