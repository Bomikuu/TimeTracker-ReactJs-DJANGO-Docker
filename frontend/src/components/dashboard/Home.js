import React, { Component, Fragment } from "react";
import "../../css/Home.css";
import { Footer, Header } from "../layout/Layout";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="child-container dashboard-header">
            <Header />
          </div>
          <div className="child-container dashboard-body">
            <div className="body-child" />
            <div className="body-child" />
            <div className="body-child project-body" />
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
