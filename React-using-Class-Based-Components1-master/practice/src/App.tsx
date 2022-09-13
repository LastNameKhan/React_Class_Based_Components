import React from "react";
import "./App.css";
import GetRequest from "./Components/GetRequest";
import Counter from "./Components/HigherOrderComponents/Counter";
import Hover from "./Components/HigherOrderComponents/Hover";
import Portals from "./Components/Portals";
import PostRequest from "./Components/PostRequest";

function App() {
  return (
    <div className="App">
      <Counter />
      <Hover />
      {/* <PostRequest /> */}
      {/* <GetRequest /> */}
      {/* <Portals /> */}
    </div>
  );
}

export default App;
