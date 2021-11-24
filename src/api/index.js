import axios from "axios";
import { getToken } from "../auth";

let { BASE = "http://localhost:5000" } = process.env;
if (BASE === "http://localhost:5000" && process.env.NODE_ENV === "production")
  BASE = "https://pixal-art.herokuapp.com";
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

export async function createArtwork(imageArr, name, isPublic, borders) {
  try {
    const token = getToken();
    const { data } = await axios.post(
      `${BASEURL}/artwork/newArtwork`,
      { imageArr, name, isPublic, borders },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPublicArtwork() {
  try {
    const { data } = await axios.get(`${BASEURL}/artwork/public`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPublicArtworkLimited() {
  try {
    const { data } = await axios.get(`${BASEURL}/artwork/Limit`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMyArtwork() {
  try {
    const token = getToken();
    const { data } = await axios.get(`${BASEURL}/artwork/myArtwork`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
