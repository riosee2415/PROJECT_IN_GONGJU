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
          <div className="btn">
            <button>확인</button>
          </div>
          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 삭제 </button>
          </div>
        </section>
      </div>
    );
  }

  _alertBtnHandler = () => {
    alert("삭제하시겠습니까?");
  };
}
export default App;
