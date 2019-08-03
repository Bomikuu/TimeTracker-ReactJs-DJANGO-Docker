import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";
import "antd/dist/antd.css";
import Home from "../components/dashboard/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
