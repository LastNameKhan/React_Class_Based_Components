import React, { Component, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthConsumer } from "./Context/AuthContext";
import ErrorBoundaries from "./Components/ErrorBoundaries";
import Input from "./Components/Input";

class App extends Component {
  state = {
    isLog: false,
  };
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <ErrorBoundaries>
          <AuthConsumer>
            {(value: any) => {
              console.log("value", value);
              return (
                <Routes>
                  <Route path="/" element={<Login />}></Route>
                  <Route
                    path="/navbar"
                    element={
                      value.authenticated ? (
                        <Navbar />
                      ) : (
                        <Navigate replace to={"/"} />
                      )
                    }
                  ></Route>
                  <Route
                    path="/background"
                    element={
                      value.authenticated ? (
                        <Navigate replace to={"/navbar"} />
                      ) : (
                        <Login />
                      )
                    }
                  ></Route>
                </Routes>
              );
            }}
          </AuthConsumer>
          {/* <Routes>
            {isLog ? <Route path="/navbar" element={<Navbar />} : {<Login />}</Route>}
            </Routes> */}
          <Input />
        </ErrorBoundaries>
      </div>
    );
  }
}
export default App;
// useRef
// error boundaries
