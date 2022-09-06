import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import './styles.css';
import { Calendar, Alert, Modal } from "antd";
import moment from "moment";

export default class CalendarComp extends React.Component {
  state = {
    value: moment("2022-09-06"),
    selectedValue: moment("2022-09-06"),
    isModalVisible: false
  };

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
      isModalVisible: true
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  onClickTest = () => {
    console.log("click");
  };

  handleOk = (value) => {
    this.setState({
      isModalVisible: false
    });
    this.fullCell(value);
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    });
  };

  dateCellRender = (value) => {
    return <p>jjj</p>;
  };

  render() {
    const { value, selectedValue, isModalVisible } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${
            selectedValue && selectedValue.format("YYYY-MM-DD")
          }`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
          dateCellRender={this.dateCellRender}
        />
        <Modal
          title="Input your plan"
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input type="text" name="" id="" />
        </Modal>
      </>
    );
  }
}
export class {CalendarComp};