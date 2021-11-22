import React, { useState } from "react";
import { createArtwork } from "../../api";

const SaveForm = (props) => {
  const { image, setSaving } = props;
  const [imageName, setImageName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [bordersOn, setbordersOn] = useState(false);

  async function handleSave(event) {
    event.preventDefault();
    try {
      await createArtwork(image, imageName, isPublic, bordersOn);
      setSaving(false);
    } catch (error) {
      console.error(error);
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
