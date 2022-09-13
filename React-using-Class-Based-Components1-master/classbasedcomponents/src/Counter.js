import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmoounted");
  }

  handleOnclickadd() {
    // alert("Hello");
    // this.setState({data:"second"})
    this.setState({ count: this.state.count + 1 });
  }
  handleOnclicksub() {
    if (this.state.count == 0) {
      alert("Can not enter an negative value");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }
  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    console.log("rendering")
    return (
      <div>
        <h1>The count is: {this.state.count}</h1>
        <button onClick={() => this.handleOnclickadd()}>Update state </button>
        <button onClick={() => this.handleOnclicksub()}>Update state </button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
