import React, { useState, useEffect } from "react";
import { getMyArtwork } from "../api";

const MyGallery = () => {
  const [allArtwork, setAllArtwork] = useState([]);

  useEffect(() => {
    async function getArt() {
      try {
        const allArtwork = await getMyArtwork();
        setAllArtwork(allArtwork);
      } catch (error) {
        console.log(error);
      }
    }
    getArt();
  }, []);

  return (
    <div>
      {allArtwork.map((art) => {
        return (
          <div key={art.id}>
            <p>{art.image_array}</p>
            <h2>
              {art.name} by {art.username}
            </h2>
          </div>
        );
        // return <SingleArtwork art={art} key={art.id} />
      })}
    </div>
  );
};

export default MyGallery;
