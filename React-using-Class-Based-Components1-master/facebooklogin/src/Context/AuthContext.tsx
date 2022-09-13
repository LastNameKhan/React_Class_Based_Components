import React, { Component } from "react";
// import { TextField, Box, Button, Card, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

type Myprops = {
  children: any;
  isLogin: any;
};

type Mystate = {
  email: string;
  password: string;
  authenticated: boolean;
  Link: any;
  updateEdit: any;
};

const AuthContext = React.createContext(null) as any;

class AuthProvider extends Component<Myprops, Mystate> {
  state: any = {
    email: "",
    password: "",
    authenticated: true,
  };

  GetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // this.props.isLogin(true);
    const { email, password } = this.state;
    let status = true;
    if (email.length !== 0 || password.length !== 0) {
      status = false;
    } else {
      status = true;
    }
    if (status === true) {
      alert("error");
      this.setState({
        authenticated: true,
      });
    }
    console.log("onSubmit", this.handleLogin);
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          handleLogin: this.handleLogin,
          GetValue: this.GetValue,
          // handleOnclick: this.handleOnclick,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
