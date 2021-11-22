import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactLinks from "./ContactLinks";
import MyName from "./MyName";
import MintBeanShoutout from "./MintBeanShoutout";
import { getPublicArtworkLimited } from "../../api";
import HomeGallerySingle from "./HomeGallerySingle";

const Home = () => {
  const [allArtwork, setAllArtwork] = useState([]);

  useEffect(() => {
    async function getArt() {
      try {
        const newArtwork = await getPublicArtworkLimited();
        setAllArtwork(newArtwork);
      } catch (error) {
        console.error(error);
      }
    }
    getArt();
  }, []);

  return (
    <div>
      <h1>Pixal Art</h1>

      <>
        <Link to="/painting">
          <button type="button">Start painting</button>
        </Link>
      </>
      <>About the app</>
      <div className="main_about_grid">
        {allArtwork.length &&
          allArtwork.map((art) => {
            return (
              <div className="about_box" key={art.id}>
                <HomeGallerySingle {...art} />
              </div>
            );
          })}

        <MyName />
        <AboutMe />
        <ContactLinks />
        <MintBeanShoutout />
        <div id="tech_used" className="about_box">
          <h2>Technologies Used</h2>
        </div>
        <div id="tech_used" className="about_box">
          <img src="images/react-logo.png" alt="React logo" />

          <img
            src="images/ReactHooksWhiteBackground.png"
            alt="react hooks logo"
          />
        </div>

        <div id="tech_used" className="about_box">
          <img src="images/express-facebook-share.png" alt="Express logo" />

          <img src="images/1280px-Node.js_logo.svg.png" alt="Node JS logo" />
        </div>
        <div id="tech_used" className="about_box">
          <img
            src="images/html5-logo-31819.png"
            alt="HTML CSS Javascript logo"
          />
          <img src="images/postgresql-logo.png" alt="Postgres SQL logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
