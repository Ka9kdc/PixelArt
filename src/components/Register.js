import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../api";
import { storeToken } from "../auth";

const Register = (props) => {
  const { setIsLoggedIn, isLoggedIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    if (password.length < 8)
      setErrorMessage("Your password need to be eight characters long");
    else if (!username.length) setErrorMessage("You need a username");
    else if (password !== retypePassword)
      setErrorMessage("Your passwords do not match");
    else {
      try {
        const data = await registerUser(username, password);
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
    <form onSubmit={handleRegister}>
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
      <fieldset id="retype password">
        <label htmlFor="retype password">Confirm Password: </label>
        <input
          type="password"
          value={retypePassword}
          onChange={(event) => setRetypePassword(event.target.value)}
          name="password"
          placeholder="Enter Your Password Again"
        />
      </fieldset>
      <button type="submit">Register</button>
      <Link to="/login">All Ready a user? Click here to Login</Link>
    </form>
  );
};

export default Register;
