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
    "#100000",
    "#00000a",
    "#0000a0",
    "#000a00",
    "#00a000",
    "#010000",
    "#10000a",
    "#0000a1",
    "#000a10",
    "#00a100",
    "#0cc000",
    "#cc0000",
    "#1000a1",
    "#000acc",
    "#00acc0",
    "#0cc100",
    "#cc1000",
    "#cc000a",
    "#100acc",
    "#00acc1",
    "#0cccc0",
    "#cccc00",
    "#cc100a",
    "#cc00a1",
    "#10cccc",
    "#000abb",
    "#00abb0",
    "#0bb100",
    "#bb1000",
    "#bb000a",
    "#100abb",
    "#00abb1",
    "#0bbbb0",
    "#bbbb00",
    "#bb100a",
    "#bb00a1",
    "#10bbbb",
  ]);
  const [addCol, setAdd] = useState(false);
  let optionPerRow = colorOptions.length;
  if (optionPerRow > 10) {
    let loop = 10;
    optionPerRow = Math.ceil(Math.sqrt(colorOptions.length + 1));
    console.log(optionPerRow);
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
            className="cell"
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
          className={"" === choosenColor ? "cell active" : "cell"}
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
            className={col === choosenColor ? "cell active" : "cell"}
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
