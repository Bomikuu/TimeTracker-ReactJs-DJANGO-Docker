import React, { Component } from "react";
import { Modal, Button, Input } from "antd";

class AddTimestamp extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    employeeName: "",
    timeStamp: "",
    description: "",
    isFieldEmpty: false
  };

  initialState = {};

  getData = () => {
    let { employeeName, timeStamp, description } = this.state;
    return {
      employeeName: employeeName,
      timeStamp: timeStamp,
      description: description
    };
  };

  checkIfEmpty = () => {
    let { employeeName, timeStamp, description } = this.state;
    if (employeeName === "" || timeStamp === "" || description === "") {
      this.setState({ isFieldEmpty: true });
    } else {
      this.setState({
        isFieldEmpty: false,
        employeeName: "",
        timeStamp: "",
        description: ""
      });
      this.props.state.handleSubmit(this.getData());
    }
  };

  render() {
    const { visible, handleOk } = this.props.state;

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
              this.checkIfEmpty();
            }}
          >
            Submit
          </Button>
        ]}
      >
        <div>Employee Name</div>
        <Input
          ref={c => (this.input1 = c)}
          className="input"
          value={this.state.employeeName}
          onChange={e => this.setState({ employeeName: e.target.value })}
        />
        <div>Hours Rendered</div>
        <Input
          className="input"
          value={this.state.timeStamp}
          onChange={e => this.setState({ timeStamp: e.target.value })}
        />
        <div>Task Description</div>
        <Input
          className="input"
          value={this.state.description}
          onChange={e => this.setState({ description: e.target.value })}
        />
        <span
          className="validation"
          style={
            this.state.isFieldEmpty ? { color: "red" } : { display: "none" }
          }
        >
          *All fields must be filled in
        </span>
      </Modal>
    );
  }
}
export default AddTimestamp;
