import React, { Component, Fragment } from "react";
import "../../css/Home.css";
import { Header } from "../layout/Layout";
import Clock from "../dashboard/Clock";
import Recent from "../dashboard/Recent";
import ProjectSummary from "../dashboard/ProjectSummary";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="child-container dashboard-header">
            <Header />
          </div>
          <div className="child-container dashboard-body">
            <div className="body-child clock-body">
              <Clock />
            </div>
            <div className="body-child recent-body">
              <Recent />
            </div>
            <div className="body-child project-body">
              <ProjectSummary />
            </div>
          </div>
          {/* <div className="child-container dashboard-footer">
            <Footer />
          </div> */}
        </div>
      </Fragment>
    );
  }
}

export default Home;
