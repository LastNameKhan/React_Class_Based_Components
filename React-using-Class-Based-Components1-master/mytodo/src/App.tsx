import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import InputFields from "./Components/InputFields";
import Todo from "./Components/Todo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1c1c1c;
    color: whitesmoke
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Todo />
        {/* <InputFields /> */}
      </>
    );
  }
}

export default App;
