import React from "react";
import "./CSS/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="top">캘린더 만들어서 넣기</div>

        <div className="button">
          <input className="btn" type="button" value="확인"></input>
        </div>

        <div className="bottom">
          <input className="text__1" type="text"></input>
          <input className="btn__1" type="button" value="삭제"></input>

          <div className="bottom_1">
            <input className="text__2" type="text"></input>
            <input className="btn__2" type="button" value="삭제"></input>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
