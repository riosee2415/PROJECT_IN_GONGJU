import React from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import "../../css/styles.css";
import { Tag, Divider } from "antd";

class CalendarAnt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}
export default CalendarAnt;
