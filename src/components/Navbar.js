import React from "react";
import { Link } from "react-router-dom";
import { clearCurrentUser } from "../auth";

const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  function logout() {
    clearCurrentUser();
    setIsLoggedIn(false);
  }

  return (
    <nav className="flex_row">
      <h2>Pixal Art</h2>
      <Link to="/">
        <button type="button" style={{ backgroundColor: "rgba(255,0,0,1)" }}>
          Home
        </button>
      </Link>
      <Link to="/painting">
        <button type="button" style={{ backgroundColor: "rgba(255,144,0,1)" }}>
          Painting
        </button>
      </Link>
      <Link to="/gallery">
        <button type="button" style={{ backgroundColor: "rgba(0,128,0,1)" }}>
          Public Gallery
        </button>
      </Link>
      {isLoggedIn ? (
        <Link to="/mygallery">
          <button type="button" style={{ backgroundColor: "rgba(0,0,255,1)" }}>
            My Gallery
          </button>
        </Link>
      ) : (
        <Link to="/register">
          <button type="button" style={{ backgroundColor: "rgba(0,0,255,1)" }}>
            Register
          </button>
        </Link>
      )}
      {isLoggedIn ? (
        <Link to="/" onClick={logout}>
          <button
            type="button"
            style={{ backgroundColor: "rgba(128,0,128,1)" }}
          >
            Log out
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button
            type="button"
            style={{ backgroundColor: "rgba(128,0,128,1)" }}
          >
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
