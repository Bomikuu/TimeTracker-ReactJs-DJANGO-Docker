import React, { Component } from "react";
import { Button, Icon } from "antd";
import Timestamp from "../layout/AddTimestamp";
import axios from "axios";

class Clock extends Component {
  constructor(props) {
    super(props);
    let time = this.getTimeString();
    let date = this.getDateString();
    this.state = {
      time,
      date,
      visible: false
    };
  }

  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  getTimeString = () => {
    return new Date(Date.now()).toLocaleTimeString();
  };

  getDateString = () => {
    let date = new Date();
    let { monthNames, dayNames } = this;
    let day = date.getDate().toString();
    let month = monthNames[date.getMonth()];
    let weekday = dayNames[date.getDay()];
    let suffix =
      day % 10 === 1
        ? "st"
        : day % 10 === 2
        ? "nd"
        : day % 10 === 3
        ? "rd"
        : "th";

    return month + " " + day + suffix + ", " + weekday;
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      var date = this.getTimeString();
      this.setState({
        time: date
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleOk = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSubmit = timestamp => {
    console.log(timestamp);
    this.handleOk();
    const url = process.env.REACT_APP_API_BASE_URL + "/create-timestamp";
    axios({
      method: "post",
      url: url,
      headers: {
        "content-type": "application/json"
      },
      data: timestamp
    }).then(res => {
      console.log(res);
      this.setState();
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
    return (
      <div className="clock-container">
        <div className="is-module-title"> Current Time</div>
        <div className="clock-group">
          <div className="is-time">{this.state.time}</div>
          <div className="is-day">{this.state.date}</div>
          <Button className="clock-button" onClick={this.handleOk}>
            Time-In
            <Icon type="right" />
          </Button>
        </div>
        <Timestamp state={this.modalState()} />
      </div>
    );
  }
}

export default Clock;
