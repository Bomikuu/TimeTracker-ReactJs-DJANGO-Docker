import React, { Component } from "react";
import axios from "axios";

class Recent extends Component {
  state = {
    listOfTimestamp: {}
  };

  componentDidMount() {
    this.getRecentTimestamp();
  }

  getRecentTimestamp = () => {
    const url = process.env.REACT_APP_API_BASE_URL + "/timestamp";
    return axios.get(url).then(response => {
      this.setState({ listOfTimestamp: response.data });
    });
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
              <div key={stamp.id} className="is-regular">
                {stamp.employeeName + ", " + stamp.timeStamp}
              </div>
            );
          }
        })
      )
    ) : (
      <div className="is-bold">No Timestamps yet. Click Time-in!</div>
    );

    return (
      <div className="recent-container">
        <span className="is-module-title"> Recent Timestamps</span>
        <div className="recent-list">{timestampList}</div>
      </div>
    );
  }
}

export default Recent;
