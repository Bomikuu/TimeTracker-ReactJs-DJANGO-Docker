import React, { Component, Fragment } from "react";
import "../../css/Dashboard.css";
import { Header } from "../layout/Layout";
import Recent from "../dashboard/Recent";
import ProjectSummary from "../dashboard/ProjectSummary";
import { Calendar } from "antd";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard1-container">
          <div className="dashboard1-header">
            <Header />
          </div>
          <div className="dashboard-body">
            <div className="body-child recent-body">
              <Recent />
            </div>
            <Calendar fullscreen={false} />

            <div className="body-child project-body">
              <ProjectSummary />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
