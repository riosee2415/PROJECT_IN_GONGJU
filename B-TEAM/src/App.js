import React from "react";
import "./CSS/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <section className="App__top"></section>

        <section className="App__middle">
          <button>확인</button>
        </section>

        <section className="App__bottom">
          <div className="App__bottom__box">
            <input type="text" />
            <button> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button> 삭제 </button>
          </div>

          <div className="App__bottom__box">
            <input type="text" />
            <button> 삭제 </button>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
