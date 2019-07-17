import React from "react";
import ImgCard from "./components/ImgCard";
import ImgGrid from "./components/ImgGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Nasa's Image Of The Day 🚀!</p>
      <ImgGrid limit={1} />
    </div>
  );
}

export default App;
