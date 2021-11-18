import React from "react";

const BoardSize = (props) => {
  const { setGridSize } = props;
  const sizeOptions = [8, 12, 16, 24, 32, 48, 64, 92, 128];
  return (
    <div className="pallette">
      <h3>Choose a canavus siz:</h3>
      {sizeOptions.map((size) => {
        return (
          <button type="button" onClick={() => setGridSize(size)} key={size}>
            {size} by {size}
          </button>
        );
      })}
    </div>
  );
};

export default BoardSize;
