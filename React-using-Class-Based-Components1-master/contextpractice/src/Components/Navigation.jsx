import React, { Component } from "react";
import { withRouter } from "react-router";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    alert("You are logged in");
    this.props.history.push("/home");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Log In</button>
      </div>
    );
  }
}

export default withRouter(Navigation);
