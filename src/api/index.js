import axios from "axios";

const { BASE = "http://localhost:5000" } = process.env;
const BASEURL = BASE + "/api";

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASEURL}/users/login`, {
      username: username,
      password: password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASEURL}/users/register`, {
      username: username,
      password: password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}
