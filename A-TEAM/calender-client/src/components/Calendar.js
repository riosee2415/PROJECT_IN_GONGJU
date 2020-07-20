import React from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom";
import { Calendar, Badge } from "antd";
import "../../css/styles.css";

class CalendarAnt extends React.Component {
  render() {
    return (
      <div>
        <Calendar
          dateCellRender={this._dateCellRender}
          monthCellRender={this._monthCellRender}
        />
        ,{document.getElementById("container")}
      </div>
    );
  }

  _onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }

  _dateCellRender(value) {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  _getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  }

  dateCellRender(value) {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  monthCellRender(value) {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
}

export default CalendarAnt;
