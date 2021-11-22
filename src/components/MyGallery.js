import React, { useState, useEffect } from "react";
import { getMyArtwork } from "../api";
import SingleArtwork from "./SingleArtwork";

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
      <h1>My Image Gallery</h1>
      <div className="flex_row">
        {allArtwork.map((art) => {
          return <SingleArtwork {...art} key={art.id} />;
        })}
      </div>
    </div>
  );
};

export default MyGallery;
