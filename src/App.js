import React from "react";
import ImgCard from "./components/ImgCard";
import ImgGrid from "./components/ImgGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ImgGrid limit={1} />
    </div>
  );
}

export default App;
