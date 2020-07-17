import React from "react";
import "./CSS/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="top">캘린더</div>

        <div className="button">
          <button className="btn">확인</button>
        </div>

        <div className="bottom">
          <input type="text" className="text__1"></input>
          <button className="btn__1">삭제</button>
        </div>
      </div>
    );
  }
}
export default App;
