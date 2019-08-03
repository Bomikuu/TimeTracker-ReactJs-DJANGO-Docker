import React, { Component } from "react";
import { Modal, Button, Input } from "antd";

class Timestamp extends Component {
  constructor(props) {
    super(props);
  }

  timestamp = {
    employeeName: "",
    timeStamp: "",
    description: ""
  };

  clearInputs = () => {
    if (this.input1) {
      console.log(this.input1);
    }
  };

  render() {
    const { visible, handleOk, handleSubmit } = this.props.state;

    return (
      <Modal
        title="Add Timestamp"
        visible={visible}
        onOk={handleOk}
        centered={true}
        onCancel={handleOk}
        footer={[
          <Button
            className="default"
            key="back"
            onClick={() => {
              handleSubmit(this.timestamp);
              this.clearInputs();
            }}
          >
            Submit
          </Button>
        ]}
      >
        <div>Employee ID(Numbers Only)</div>
        <Input
          ref={c => (this.input1 = c)}
          className="input"
          onChange={e => (this.timestamp.employeeName = e.target.value)}
        />
        <div>Hours Rendered</div>
        <Input
          className="input"
          onChange={e => (this.timestamp.timeStamp = e.target.value)}
        />
        <div>Task Description</div>
        <Input
          className="input"
          onChange={e => (this.timestamp.description = e.target.value)}
        />
      </Modal>
    );
  }
}
export default Timestamp;
