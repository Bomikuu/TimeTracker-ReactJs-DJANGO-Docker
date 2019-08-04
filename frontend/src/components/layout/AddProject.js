import React, { Component } from "react";
import { Modal, Button, Input, Select, Option } from "antd";

class AddProject extends Component {
  constructor(props) {
    super(props);
  }

  project = {
    projectName: "",
    description: "",
    status: ""
  };

  clearInputs = () => {
    if (this.input1) {
      console.log(this.input1);
    }
  };

  render() {
    const { visible, handleOk, handleSubmit } = this.props.state;
    const { Option } = Select;
    return (
      <Modal
        title="Create Project"
        visible={visible}
        onOk={handleOk}
        centered={true}
        onCancel={handleOk}
        footer={[
          <Button
            className="default"
            key="back"
            onClick={() => {
              handleSubmit(this.project);
              this.clearInputs();
            }}
          >
            Submit
          </Button>
        ]}
      >
        <div>Project Name</div>
        <Input
          ref={c => (this.input1 = c)}
          className="input"
          onChange={e => (this.project.projectName = e.target.value)}
        />
        <div>Project Description</div>
        <Input
          className="input"
          onChange={e => (this.project.description = e.target.value)}
        />
        <div>Project Status</div>
        <Select
          defaultValue="Status"
          style={{ width: "100%" }}
          onChange={e => (this.project.status = e)}
        >
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </Modal>
    );
  }
}
export default AddProject;
