// Connect to DB
const { Client } = require("pg");
const DB_NAME = "localhost:5432/pixalart";
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);

// database methods

const createUser = async ({ username, password }) => {
  try {
    const errorFound = new Error("invalid username or password");
    if (!username || !password) throw errorFound;
    if (password.length < 8) throw errorFound;
    const repeatUser = await getUserbyUsername(username);
    if (repeatUser) throw errorFound;
    const {
      rows: [newUser],
    } = await client.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, password]
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUserbyUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query("SELECT id, username FROM users WHERE username=$1", [
      username,
    ]);
    return user;
  } catch (error) {
    throw error;
  }
};

const createArtwork = async ({ isPublic, borders, imageArr, name, userId }) => {
  try {
    if (!imageArr || !imageArr.length) throw new Error("image missing");
    if (!userId) throw new Error("Missing user");
    const imageStr = imageArr
      .map((cell) => {
        return cell.color;
      })
      .join(", ");

    const fieldKeys = ["image_array", "user_id"];
    const fieldValues = [imageStr, userId];
    let insertCounts = "$1, $2";

    if (isPublic) {
      fieldKeys.push("is_Public");
      fieldValues.push(isPublic);
      insertCounts += ", $3";
    }

    if (borders) {
      fieldValues.push(borders);
      fieldKeys.push("borders");
      insertCounts += `, $${fieldKeys.length + 1}`;
    }

    if (name) {
      fieldValues.push(name);
      fieldKeys.push("name");
      insertCounts += `, $${fieldKeys.length + 1}`;
    }

    const {
      rows: [newArtword],
    } = await client.query(
      `INSERT INTO artwork (${fieldKeys.join(
        ", "
      )}) values (${insertCounts}) returning *`,
      fieldValues
    );

    return newArtword;
  } catch (error) {
    throw error;
  }
};

// export
module.exports = {
  client,
  // db methods
  createArtwork,
  createUser,
};
