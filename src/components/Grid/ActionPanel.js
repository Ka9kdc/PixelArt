import React from "react";
import { makeBoard } from "../../utils";

const ActionPanel = (props) => {
  const {
    image,
    setImage,
    choosenColor,
    setMouseActive,
    cellBordersOn,
    setCellBordersOn,
  } = props;

  function fillEmpty() {
    let newImage = makeBoard(Math.sqrt(image.length));
    image.forEach((el, idx) => {
      if (el.color !== "") newImage[idx].color = el.color;
      else newImage[idx].color = choosenColor;
    });
    setImage(newImage);
    setMouseActive(false);
  }

  function fillAll() {
    let newImage = makeBoard(Math.sqrt(image.length));
    image.forEach((_, idx) => {
      newImage[idx].color = choosenColor;
    });
    setImage(newImage);
    setMouseActive(false);
  }

  return (
    <div className="actions">
      <button type="button" onClick={fillEmpty}>
        Fill All Empty Cells
      </button>
      <button type="button" onClick={fillAll}>
        Fill All Cells
      </button>
      <button
        type="button"
        onClick={() => {
          setImage(makeBoard(Math.sqrt(image.length)));
          setMouseActive(false);
        }}
      >
        Clear Cells
      </button>
      {cellBordersOn ? (
        <button
          type="button"
          onClick={() => {
            setCellBordersOn(false);
            setMouseActive(false);
          }}
        >
          Hide Grid lines
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setCellBordersOn(true);
            setMouseActive(false);
          }}
        >
          See Grid Lines
        </button>
      )}
      <button type="button" onClick={() => console.log(image)}>
        Save
      </button>
    </div>
  );
};

export default ActionPanel;
