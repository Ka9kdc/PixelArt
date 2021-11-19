import React, { useState } from "react";

const AddNewColor = (props) => {
  const {
    colorOptions,
    setColorOptions,
    setChoosenColor,
    setAdd,
    setMouseActive,
    optionPerRow,
  } = props;
  const [newColor, setNewColor] = useState("#000000");
  function handleSubmit(event) {
    event.preventDefault();
    const newOptions = [...colorOptions, newColor];
    setColorOptions(newOptions);
    setChoosenColor(newColor);
    setAdd(false);
    setMouseActive(false);
  }
  return (
    <form onSubmit={handleSubmit} className="flex_row">
      <fieldset>
        <label htmlFor="newColorPicker">Choose your Color: {newColor}</label>
        <input
          type="color"
          id="newColorPicker"
          name="newColorPicker"
          value={newColor}
          className="cell"
          style={{ "--grid-size": Math.min(optionPerRow, 12) }}
          onChange={(event) => {
            setNewColor(event.target.value);
          }}
        />
      </fieldset>
      <button
        type="submit"
        className="cell"
        style={{ "--grid-size": Math.min(optionPerRow, 12) }}
      >
        Add Color
      </button>
    </form>
  );
};

export default AddNewColor;
