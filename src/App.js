import React from "react";
import ImgGrid from "./components/ImgGrid";
// import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <p className="intro">NASA Image Of The Day 🚀!</p>
      <ImgGrid limit={1} />
    </div>
  );
}

export default App;
