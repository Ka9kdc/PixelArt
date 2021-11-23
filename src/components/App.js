import React, { useState } from "react";
import BoardSize from "./BoardSize";
import Grid from "./Grid";

const App = () => {
  const [gridSize, setGridSize] = useState(8);
  const [mouseActive, setMouseActive] = useState(false);

  return (
    <div className="App" onMouseUp={() => setMouseActive(false)}>
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
