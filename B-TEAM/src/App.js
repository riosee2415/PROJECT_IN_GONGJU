import React from "react";
import "./CSS/styles.css";
import Calendar from "../src/Calendar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="App__top">
          <Calendar size="xs" />
        </div>
        <section className="App__bottom">
          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 확인 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 확인 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 확인 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 확인 </button>
          </div>
        </section>
      </div>
    );
  }

  _alertBtnHandler = () => {
    alert("확인");
  };
}
export default App;
