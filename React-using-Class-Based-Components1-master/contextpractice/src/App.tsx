import React, { Component } from "react";
import "./App.css";
import {Router, Route} from "react-router-dom";
import User from "./Components/User";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation"
type MyProps = {

}

type Mystate = {
  Router: React.ReactElement | null,
  path:any,
}

class App extends Component<MyProps,Mystate> {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
