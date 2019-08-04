import React, { Component, Fragment } from "react";
import Empty from "../../img/time.png";
import { Button } from "antd";
import Timestamp from "../layout/AddTimestamp";
import axios from "axios";

class Recent extends Component {
  state = {
    listOfTimestamp: {},
    visible: false
  };

  componentDidMount() {
    this.getRecentTimestamp();
  }

  getRecentTimestamp = () => {
    const url = process.env.REACT_APP_API_BASE_URL + "/timestamp";
    return axios.get(url).then(response => {
      this.setState({ listOfTimestamp: response.data.reverse() });
    });
  };

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
      this.getRecentTimestamp();
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
    let { listOfTimestamp } = this.state;
    let timestampList = [];
    timestampList = listOfTimestamp.length ? (
      Array.from(
        listOfTimestamp.map((stamp, index) => {
          if (index >= 5) {
          } else {
            return (
              <div key={stamp.id} className="is-timestamp">
                <a>{stamp.employeeName}</a>
                <span>{stamp.timeStamp}</span>
                <span>{stamp.createdAt}</span>
              </div>
            );
          }
        })
      )
    ) : (
      <div className="empty-container">
        <img src={Empty} className="header-logo" alt="Time Tracker" />
        <div className="is-regular">No Timestamps yet. Click Time-in!</div>
      </div>
    );

    return (
      <Fragment>
        <div className="is-module-title">
          <span>Recent Timestamps</span>
          <Button
            className="button-icon"
            type="primary"
            icon="plus"
            onClick={this.handleOk}
          />
        </div>
        <div
          className={listOfTimestamp.length ? "recent-list" : "recent-empty"}
        >
          {timestampList}
        </div>
        <Timestamp state={this.modalState()} />
      </Fragment>
    );
  }
}

export default Recent;
