import React, { Component } from "react";
import "./App.css";
import InputFields from "./Components/InputFields";
import NewTransaction from "./Components/NewTransaction";
import Navbar from "./Components/Navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1c1c1c;
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <Navbar /> */}
        <NewTransaction />
        {/* <InputFields /> */}
      </>
    );
  }
}

export default App;
