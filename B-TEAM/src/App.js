import React from "react";
import "./CSS/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="top">캘린더</div>

        <div className="btn">
          <button>확인</button>
        </div>

        <div className="bottom">할일 목록</div>
      </div>
    );
  }
}
export default App;
