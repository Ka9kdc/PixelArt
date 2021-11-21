import React, { useState } from "react";
import BoardSize from "./BoardSize";

// import {
//   getSomething
// } from '../api';
import Grid from "./Grid";

const App = () => {
  // const [message, setMessage] = useState("");
  const [gridSize, setGridSize] = useState(8);
  const [mouseActive, setMouseActive] = useState(false);

  return (
    <div className="App" onMouseUp={() => setMouseActive(false)}>
      <h1>Hello, World!</h1>
      {/* <h2>{message}</h2> */}
      <BoardSize setGridSize={setGridSize} />
      <Grid
        mouseActive={mouseActive}
        setMouseActive={setMouseActive}
        gridSize={gridSize}
      />
    </div>
  );
};

export default App;
