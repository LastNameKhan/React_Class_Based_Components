import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// import logo from "./logo.svg";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./Button/Button";
import { AnimatedLogo } from "./Button/Button";

const theme = {
  dark: { primary: "#000", text: "#fff" },
  light: { primary: "#fff", text: "#000" },
  fontFamily: "Segeo UI",
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props: any) => props.theme.fontFamily};
  }`;

class StyledComponent extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <AnimatedLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" />
          <div>
            <button>Normal Button</button>
          </div>
          <br />
          <div>
            <StyledButton type="submit">Styled Button</StyledButton>
          </div>
          <br />
          <div>
            <StyledButton variant="outline">Styled Button</StyledButton>
          </div>
          <br />
          <div>
            <FancyButton as="a">Fancy Button</FancyButton>
          </div>
          <br />
          <div>
            <SubmitButton>Submit Button</SubmitButton>
          </div>
          <br />
          <DarkButton>Dark Button</DarkButton>
        </div>
      </ThemeProvider>
    );
  }
}

export default StyledComponent;
