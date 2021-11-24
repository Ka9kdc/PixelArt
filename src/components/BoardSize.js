import React from "react";

const BoardSize = (props) => {
  const { setGridSize, gridSize } = props;
  const sizeOptions = [8, 12, 16, 24, 32];
  return (
    <div className="flex_row">
      <h3>Choose a canvas size:</h3>
      {sizeOptions.map((size) => {
        return (
          <button
            className={
              gridSize === size ? "board_size active_size" : "board_size"
            }
            type="button"
            onClick={() => {
              setGridSize(size);
            }}
            key={size}
          >
            {size} by {size}
          </button>
        );
      })}
    </div>
  );
};

export default BoardSize;
