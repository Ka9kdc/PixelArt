import React, { useState, useEffect } from "react";
import { getPublicArtwork } from "../api";

const Gallery = () => {
  const [allArtwork, setAllArtwork] = useState([]);

  useEffect(() => {
    async function getArt() {
      try {
        const allArtwork = await getPublicArtwork();
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

export default Gallery;
