import React, { useState } from "react";
import AddNewColor from "./AddNewColor";

const Pallette = (props) => {
  const { setChoosenColor, choosenColor, setMouseActive } = props;
  const [colorOptions, setColorOptions] = useState([
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "purple",
    "pink",
    "black",
    "white",
  ]);
  const [addCol, setAdd] = useState(false);
  return (
    <div className="pallette">
      {colorOptions.map((col) => (
        <div
          key={col}
          className={col === choosenColor ? "cell active" : "cell"}
          style={{ backgroundColor: col }}
          onClick={() => {
            setChoosenColor(col);
            setMouseActive(false);
          }}
        >
          {col}
        </div>
      ))}
      {addCol ? (
        <AddNewColor
          colorOptions={colorOptions}
          setColorOptions={setColorOptions}
          setChoosenColor={setChoosenColor}
          setAdd={setAdd}
          setMouseActive={setMouseActive}
        />
      ) : (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setAdd(true);
            setMouseActive(false);
          }}
        >
          Add A Color
        </button>
      )}
    </div>
  );
};

export default Pallette;
