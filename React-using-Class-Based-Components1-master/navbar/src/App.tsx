import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import Carousel from "./Components/Carousel";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Materialui from "./Components/Materialui";
import MuGrid from "./Components/Grid";
import StyledComponent from "./Components/StyledComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/carousel" element={<Carousel />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/materialui" element={<Materialui />}></Route>
          <Route path="/mugrid" element={<MuGrid />}></Route>
          <Route path="/styledcomponent" element={<StyledComponent />}></Route>
        </Routes>
        {/* <HelloWorld /> */}
      </div>
    );
  }
}

export default App;
