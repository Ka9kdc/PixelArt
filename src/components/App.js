import React, { useState, useEffect } from "react";
import BoardSize from "./BoardSize";

// import {
//   getSomething
// } from '../api';
import Grid from "./Grid";
import Pallette from "./Pallette";

const App = () => {
  const [message, setMessage] = useState("");
  const [gridSize, setGridSize] = useState(8);
  const [mouseActive, setMouseActive] = useState(false);
  const [choosenColor, setChoosenColor] = useState("red");

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{message}</h2>
      <BoardSize setGridSize={setGridSize} />
      <Pallette
        choosenColor={choosenColor}
        setChoosenColor={setChoosenColor}
        setMouseActive={setMouseActive}
      />
      <Grid
        choosenColor={choosenColor}
        mouseActive={mouseActive}
        setMouseActive={setMouseActive}
        gridSize={gridSize}
      />
    </div>
  );
};

export default App;
