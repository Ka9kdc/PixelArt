import React, { useState } from "react";

const AddNewColor = (props) => {
  const {
    colorOptions,
    setColorOptions,
    setChoosenColor,
    setAdd,
    setMouseActive,
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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="color"
          id="newColorPicker"
          name="newColorPicker"
          value={newColor}
          onChange={(event) => {
            setNewColor(event.target.value);
          }}
        />
        <label htmlFor="newColorPicker">Choose your Color: {newColor}</label>
      </fieldset>
      <button type="submit">Add Color</button>
    </form>
  );
};

export default AddNewColor;
