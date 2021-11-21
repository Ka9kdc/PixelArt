import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { App, Login, Register, Navbar } from "./components";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
