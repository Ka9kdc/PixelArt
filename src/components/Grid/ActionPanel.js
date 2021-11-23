import React, { useState } from "react";
import { makeBoard } from "../../utils";
import SaveForm from "./SaveForm";
import { getToken } from "../../auth";

const ActionPanel = (props) => {
  const {
    image,
    setImage,
    choosenColor,
    setMouseActive,
    cellBordersOn,
    setCellBordersOn,
  } = props;
  const [saving, setSaving] = useState(false);
  const [savingError, setSavingError] = useState("");

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

  function checkSave() {
    const token = getToken();
    if (token) {
      setSaving(true);
      setSavingError("");
    } else {
      setSaving(false);
      setSavingError("Please log in to save your artwork");
      localStorage.setItem(
        `image${Math.sqrt(image.length)}`,
        JSON.stringify(image)
      );
    }
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

      {savingError.length ? (
        <span className="error_message">{savingError}</span>
      ) : null}
      {saving ? (
        <SaveForm
          image={image}
          setSaving={setSaving}
          setSavingError={setSavingError}
        />
      ) : (
        <button type="button" onClick={checkSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default ActionPanel;
