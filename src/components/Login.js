import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../api";
import { storeToken } from "../auth";

const Login = (props) => {
  const { setIsLoggedIn, isLoggedIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    if (password.length < 8 || !username.length)
      setErrorMessage("Invalid username or password");
    else {
      try {
        const data = await loginUser(username, password);
        storeToken(data.token);
        setIsLoggedIn(true);
        setErrorMessage("");
        history.push("/painting");
      } catch (error) {
        console.log(error);
        setErrorMessage("Invalid username or password");
      }
    }
  }

  if (isLoggedIn) return <h1>You are Logged in</h1>;

  return (
    <form onSubmit={handleLogin}>
      {errorMessage.length ? <span>{errorMessage}</span> : null}
      <fieldset id="username">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          name="username"
          placeholder="Enter username"
        />
      </fieldset>
      <fieldset id="password">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          placeholder="Enter Password"
        />
      </fieldset>
      <button type="submit">Log in</button>
      <Link to="/register">New User? Click here to Register</Link>
    </form>
  );
};

export default Login;
