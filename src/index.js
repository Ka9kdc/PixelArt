import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import {
  App,
  Login,
  Register,
  Navbar,
  Gallery,
  MyGallery,
  Home,
} from "./components";
import { getToken } from "./auth";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/painting">
          <App />
        </Route>
        <Route path="/login">
          {!isLoggedIn ? (
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Redirect to="/mygallery" />
          )}
        </Route>
        <Route path="/register">
          {!isLoggedIn ? (
            <Register setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Redirect to="/mygallery" />
          )}
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/mygallery">
          {isLoggedIn ? <MyGallery /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById("root")
);
