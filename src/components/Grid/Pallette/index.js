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
    "gray",
  ]);
  const [addCol, setAdd] = useState(false);
  let optionPerRow = colorOptions.length;
  if (optionPerRow > 10) {
    optionPerRow = Math.ceil(Math.sqrt(colorOptions.length + 1));
  }
  return (
    <div>
      <div className="flex_row">
        {addCol ? (
          <AddNewColor
            colorOptions={colorOptions}
            setColorOptions={setColorOptions}
            setChoosenColor={setChoosenColor}
            setAdd={setAdd}
            setMouseActive={setMouseActive}
            optionPerRow={optionPerRow}
          />
        ) : (
          <button
            type="button"
            className="cell newColorPicker"
            style={{ "--grid-size": Math.min(optionPerRow, 10) }}
            onClick={(event) => {
              event.preventDefault();
              setAdd(true);
              setMouseActive(false);
            }}
          >
            Add A Color
          </button>
        )}
        <div
          key="eraser"
          className={
            "" === choosenColor ? "cell active" : "cell newColorPicker"
          }
          style={{
            "--grid-size": Math.min(optionPerRow, 12),
          }}
          onClick={() => {
            setChoosenColor("");
            setMouseActive(false);
          }}
        >
          <i className="fas fa-eraser fa-3x"></i>
        </div>
      </div>
      <div className="flex_row">
        {colorOptions.map((col) => (
          <div
            key={col}
            className={
              col === choosenColor ? "cell active" : "cell newColorPicker"
            }
            style={{
              backgroundColor: col,
              "--grid-size": Math.min(optionPerRow, 12),
            }}
            onClick={() => {
              setChoosenColor(col);
              setMouseActive(false);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Pallette;
