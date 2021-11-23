import React, { useState, useEffect } from "react";
import { getMyArtwork } from "../api";
import SingleArtwork from "./SingleArtwork";

const MyGallery = () => {
  const [allArtwork, setAllArtwork] = useState([]);

  useEffect(() => {
    async function getArt() {
      try {
        const newArtwork = await getMyArtwork();
        setAllArtwork(newArtwork);
      } catch (error) {
        console.error(error);
      }
    }
    getArt();
  }, []);

  return (
    <div>
      <h1 className="page_title">My Image Gallery</h1>
      <div className="flex_row">
        {allArtwork.map((art) => {
          return <SingleArtwork {...art} key={art.id} />;
        })}
      </div>
    </div>
  );
};

export default MyGallery;
