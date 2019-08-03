import React, { Component } from "react";
import { Button, Icon } from "antd";

class Clock extends Component {
  render() {
    return (
      <div className="clock-container">
        <div className="is-time">
          <span> 03:44:51 AM</span>
        </div>
        <div className="is-day">
          <span>Friday, August 02, 1998</span>
        </div>
        <Button type="primary">
          Time-In
          <Icon type="right" />
        </Button>
      </div>
    );
  }
}

export default Clock;
