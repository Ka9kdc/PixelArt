import React, { useState, useEffect } from "react";
import { getPublicArtwork } from "../api";
import SingleArtwork from "./SingleArtwork";

const Gallery = () => {
  const [allArtwork, setAllArtwork] = useState([]);

  useEffect(() => {
    async function getArt() {
      try {
        const allArtwork = await getPublicArtwork();
        setAllArtwork(allArtwork);
      } catch (error) {
        console.error(error);
      }
    }
    getArt();
  }, []);

  return (
    <div>
      <h1 className="page_title">Image Gallery</h1>
      <div className="flex_row">
        {allArtwork.map((art) => {
          return <SingleArtwork {...art} key={art.id} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
