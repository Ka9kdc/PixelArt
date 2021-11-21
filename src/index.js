import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { App, Login, Register, Navbar, Gallery, MyGallery } from "./components";
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
        {!isLoggedIn && (
          <Route path="/login">
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/register">
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
        )}
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/mygallery">
          <MyGallery />
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
