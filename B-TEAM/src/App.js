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
<<<<<<< HEAD
        <section className="App__top"></section>

        <section className="App__middle">
          <button>확인</button>
        </section>

        <section className="App__bottom">
          <div className="App__bottom__box">
            <input type="text" />
            <button> 삭제 </button>
=======
        <div className="App__top">
          <Calendar size="xs" />
        </div>
        <section className="App__bottom">
          <div className="App__bottom__box">
            <input type="text" />
            <button onClick={this._alertBtnHandler}> 확인 </button>
>>>>>>> 9e8e5a42958e6f7ab69fc807a176a48329ea2065
          </div>

          <div className="App__bottom__box">
            <input type="text" />
<<<<<<< HEAD
            <button> 삭제 </button>
=======
            <button onClick={this._alertBtnHandler}> 확인 </button>
>>>>>>> 9e8e5a42958e6f7ab69fc807a176a48329ea2065
          </div>

          <div className="App__bottom__box">
            <input type="text" />
<<<<<<< HEAD
            <button> 삭제 </button>
=======
            <button onClick={this._alertBtnHandler}> 확인 </button>
>>>>>>> 9e8e5a42958e6f7ab69fc807a176a48329ea2065
          </div>

          <div className="App__bottom__box">
            <input type="text" />
<<<<<<< HEAD
            <button> 삭제 </button>
=======
            <button onClick={this._alertBtnHandler}> 확인 </button>
>>>>>>> 9e8e5a42958e6f7ab69fc807a176a48329ea2065
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
