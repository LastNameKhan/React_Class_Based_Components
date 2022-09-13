import React, { Component } from "react";
import ReactDOM from "react-dom";

// const root = document.getElementById("root");
// const portalRoot = document.getElementById("protal-root");

class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Portals</h1>,
      document.getElementById("protal-root") as HTMLElement
    );
  }
}

export default Portals;
