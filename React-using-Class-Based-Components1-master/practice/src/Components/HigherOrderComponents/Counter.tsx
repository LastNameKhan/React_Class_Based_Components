import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
type MyProps = {
  name:any;
};

type MyState = {
  count: any;
};

class Counter extends Component<MyProps, MyState> {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked {count} Times {this.props.name}
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(Counter);
