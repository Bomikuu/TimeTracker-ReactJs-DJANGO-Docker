import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";
import "antd/dist/antd.css";
import Dashboard from "../components/dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
