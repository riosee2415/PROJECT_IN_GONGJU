import React from "react";
import "../css/styles.css";
import DateAndTimePickers from "./components/DateAndTimePickers";
import CalendarAnt from "./components/Calendar";

class App extends React.Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="calender">
            <CalendarAnt />
          </div>
        </div>
        <div className="todo">
          <div className="seleteDate">
            <DateAndTimePickers />
          </div>
          <input type="text" className="todoList"></input>
          <button className="check">check</button>
        </div>
      </div>
    );
  }
}

export default App;
