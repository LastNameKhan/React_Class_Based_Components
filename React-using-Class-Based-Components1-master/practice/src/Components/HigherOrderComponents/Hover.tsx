import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
type MyProps = {
    name:any;
};

type MyState = {
  count: any;
};

class Hover extends Component<MyProps, MyState> {
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
      <h2 onMouseOver={this.incrementCount}>
        {this.props.name} Hover {count} times
      </h2>
    );
  }
}

export default UpdatedComponent(Hover);
