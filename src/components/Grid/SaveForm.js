import React, { useState } from "react";
import { createArtwork } from "../../api";
import { makeBoard } from "../../utils";

const SaveForm = (props) => {
  const { image, setSaving, setSavingError, setImage } = props;
  const [imageName, setImageName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [bordersOn, setbordersOn] = useState(false);

  async function handleSave(event) {
    event.preventDefault();
    try {
      if (!imageName.length) {
        setSavingError("Please enter a name for your artwork");

        localStorage.setItem(
          `image${Math.sqrt(image.length)}`,
          JSON.stringify(image)
        );
      } else {
        await createArtwork(image, imageName, isPublic, bordersOn);
        setSaving(false);
        setImage(makeBoard(Math.sqrt(image.length)));
        localStorage.removeItem(`image${Math.sqrt(image.length)}`);
      }
    } catch (error) {
      console.error(error);
      localStorage.setItem(
        `image${Math.sqrt(image.length)}`,
        JSON.stringify(image)
      );
    }
  }

  return (
    <form onSubmit={handleSave}>
      <fieldset id="image_name">
        <label htmlFor="Images Name">Name:</label>
        <input
          type="alphanumric"
          values={imageName}
          name="name"
          placeholder="Image Name"
          onChange={(event) => setImageName(event.target.value)}
        />
      </fieldset>
      <fieldset id="is_public">
        Do you want your image to be visible to the public:
        <label htmlFor="Is public">Yes</label>
        <input
          type="radio"
          id="is_public"
          value="true"
          name="is_public"
          checked={isPublic}
          onChange={() => setIsPublic(true)}
        />
        <label htmlFor="Is not public">No</label>
        <input
          type="radio"
          id="is_public"
          value="false"
          name="is_public"
          checked={!isPublic}
          onChange={() => setIsPublic(false)}
        />
      </fieldset>
      <fieldset id="borders">
        Do you want the cell borders to be visible on your image:
        <label htmlFor="Is public">Yes</label>
        <input
          type="radio"
          id="borders"
          value="true"
          checked={bordersOn}
          name="borders"
          onChange={() => setbordersOn(true)}
        />
        <label htmlFor="Is not public">No</label>
        <input
          type="radio"
          id="borders"
          value="false"
          checked={!bordersOn}
          name="borders"
          onChange={() => setbordersOn(false)}
        />
      </fieldset>
      <button type="submit">Save</button>
    </form>
  );
};

export default SaveForm;
