import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      result: "HELLO WORLD",
      alert: ""
    };
  }

  passMsg = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  getResult = () => {
    if (this.state.inputVal) {
      this.setState({
        inputVal: "",
        result: this.state.inputVal.toUpperCase()
      });
    } else {
      this.setState({ alert: "Please Enter A Value To Pass" });
      setTimeout(() => this.setState({ alert: "" }), 1500);
    }
  };
  render() {
    const { inputVal, result, alert } = this.state;

    return (
      <div className="wrapper">
        <div className="container">
          <p className="text">A Message You Would Like To Pass</p>
          <input value={inputVal} onChange={this.passMsg} />

          <button onClick={this.getResult}>Submit</button>
          <p className="text">Last Message Delivered</p>
          <p className={alert ? "alert" : null}>{alert}</p>
          <p className="result">{result}</p>
        </div>
      </div>
    );
  }
}
export default App;
