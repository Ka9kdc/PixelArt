import React from "react";
import { makeBoard } from "../../utils";

const Cells = (props) => {
  const {
    color,
    choosenColor,
    setMouseActive,
    mouseActive,
    id,
    image,
    setImage,
    gridSize,
    cellBordersOn,
  } = props;
  function handleColorChange(event) {
    event.preventDefault();
    let newImage = makeBoard(Math.sqrt(image.length));
    image[id].color = choosenColor;
    image.forEach((el, idx) => {
      if (el.color !== "") newImage[idx].color = el.color;
    });
    setImage(newImage);
  }
  return (
    <td
      onMouseDown={(event) => {
        handleColorChange(event);
        setMouseActive(true);
      }}
      onMouseOver={(event) => (mouseActive ? handleColorChange(event) : null)}
      onMouseUp={() => setMouseActive(false)}
      className={cellBordersOn ? "cell board" : "cell"}
      style={{ backgroundColor: color, "--grid-size": gridSize }}
    ></td>
  );
};

export default Cells;
