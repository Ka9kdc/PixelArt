// Connect to DB
const { Client } = require("pg");
const DB_NAME = "localhost:5432/pixalart";
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client({
  connectionString: DB_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

// database methods
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const createUser = async ({ username, password }) => {
  try {
    const errorFound = new Error("invalid username or password");
    if (!username || !password) throw errorFound;
    if (password.length < 8) throw errorFound;
    const repeatUser = await getUserByUsername(username);
    if (repeatUser) throw errorFound;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    const {
      rows: [newUser],
    } = await client.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, hashedPassword]
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

async function getUser({ username, password }) {
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

const getUserByUsername = async (username) => {
  try {
    const { rows } = await client.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
};

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT id, username
      FROM users
      WHERE id=$1;
    `,
      [userId]
    );
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
}

const createArtwork = async ({ isPublic, borders, imageArr, name, userId }) => {
  try {
    if (!imageArr || !imageArr.length) throw new Error("image missing");
    if (!userId) throw new Error("Missing user");
    const imageStr = imageArr
      .map((cell) => {
        return cell.color;
      })
      .join("-");

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
      insertCounts += `, $${fieldKeys.length}`;
    }

    if (name) {
      fieldValues.push(name);
      fieldKeys.push("name");
      insertCounts += `, $${fieldKeys.length}`;
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

const getPublicArtwork = async () => {
  try {
    const { rows } = await client.query(
      "SELECT artwork.*, users.username FROM artwork JOIN users on artwork.user_id=users.id WHERE is_public=true;"
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const getPublicArtworkLimited = async () => {
  try {
    const { rows } = await client.query(
      "SELECT artwork.* FROM artwork WHERE is_public=true ORDER BY saving_date DESC LIMIT 4;"
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const getArtworkByUserId = async (userId) => {
  try {
    const { rows } = await client.query(
      "SELECT * from artwork WHERE user_id=$1",
      [userId]
    );
    return rows;
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
  getUser,
  getUserById,
  getUserByUsername,
  getPublicArtwork,
  getArtworkByUserId,
  getPublicArtworkLimited,
};
