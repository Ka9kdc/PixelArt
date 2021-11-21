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
      <Link to="/">Home</Link>
      <Link to="/painting">Painting</Link>
      <Link to="/gallery">Public Gallery</Link>
      {isLoggedIn ? (
        <Link to="/mygallery">My Gallery</Link>
      ) : (
        <Link to="/register">Register</Link>
      )}
      {isLoggedIn ? (
        <Link to="/" onClick={logout}>
          Log out
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
