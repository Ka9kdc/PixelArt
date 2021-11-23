// code to build and initialize DB goes here
const {
  client,
  // other db methods
  createUser,
  createArtwork,
} = require("./index");

async function buildTables() {
  try {
    client.connect();
    console.log("droping");
    // drop tables in correct order
    await client.query(`
    DROP TABLE If EXISTS artwork;
    DROP TABLE IF EXISTS users;
    `);
    console.log("start table create");
    // build tables in correct order
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username varchar(255) UNIQUE NOT NULL,
      password varchar(255) NOT NULL
    );

    CREATE TABLE artwork(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      image_array TEXT NOT NULL,
      borders boolean DEFAULT false,
      is_public boolean DEFAULT false,
      name VARCHAR(255) NOT NULL,
      saving_date DATE NOT NULL DEFAULT CURRENT_DATE
    );
    `);
    console.log("tables created");
  } catch (error) {
    throw error;
  }
}

const painting1 = [
  { id: 0, color: "red" },
  { id: 1, color: "red" },
  { id: 2, color: "red" },
  { id: 3, color: "red" },
  { id: 4, color: "red" },
  { id: 5, color: "red" },
  { id: 6, color: "red" },
  { id: 7, color: "red" },
  { id: 8, color: "yellow" },
  { id: 9, color: "yellow" },
  { id: 10, color: "yellow" },
  { id: 11, color: "yellow" },
  { id: 12, color: "yellow" },
  { id: 13, color: "yellow" },
  { id: 14, color: "yellow" },
  { id: 15, color: "yellow" },
  { id: 16, color: "orange" },
  { id: 17, color: "orange" },
  { id: 18, color: "orange" },
  { id: 19, color: "orange" },
  { id: 20, color: "orange" },
  { id: 21, color: "orange" },
  { id: 22, color: "orange" },
  { id: 23, color: "orange" },
  { id: 24, color: "green" },
  { id: 25, color: "green" },
  { id: 26, color: "green" },
  { id: 27, color: "green" },
  { id: 28, color: "green" },
  { id: 29, color: "green" },
  { id: 30, color: "green" },
  { id: 31, color: "green" },
  { id: 32, color: "blue" },
  { id: 33, color: "blue" },
  { id: 34, color: "blue" },
  { id: 35, color: "blue" },
  { id: 36, color: "blue" },
  { id: 37, color: "blue" },
  { id: 38, color: "blue" },
  { id: 39, color: "blue" },
  { id: 40, color: "purple" },
  { id: 41, color: "purple" },
  { id: 42, color: "purple" },
  { id: 43, color: "purple" },
  { id: 44, color: "purple" },
  { id: 45, color: "purple" },
  { id: 46, color: "purple" },
  { id: 47, color: "purple" },
  { id: 48, color: "pink" },
  { id: 49, color: "pink" },
  { id: 50, color: "pink" },
  { id: 51, color: "pink" },
  { id: 52, color: "pink" },
  { id: 53, color: "pink" },
  { id: 54, color: "pink" },
  { id: 55, color: "pink" },
  { id: 56, color: "" },
  { id: 57, color: "" },
  { id: 58, color: "" },
  { id: 59, color: "" },
  { id: 60, color: "" },
  { id: 61, color: "" },
  { id: 62, color: "" },
  { id: 63, color: "" },
];

const painting2 = [
  { id: 0, color: "black" },
  { id: 1, color: "black" },
  { id: 2, color: "red" },
  { id: 3, color: "red" },
  { id: 4, color: "red" },
  { id: 5, color: "red" },
  { id: 6, color: "red" },
  { id: 7, color: "red" },
  { id: 8, color: "yellow" },
  { id: 9, color: "black" },
  { id: 10, color: "black" },
  { id: 11, color: "yellow" },
  { id: 12, color: "yellow" },
  { id: 13, color: "yellow" },
  { id: 14, color: "yellow" },
  { id: 15, color: "yellow" },
  { id: 16, color: "orange" },
  { id: 17, color: "orange" },
  { id: 18, color: "black" },
  { id: 19, color: "black" },
  { id: 20, color: "orange" },
  { id: 21, color: "orange" },
  { id: 22, color: "orange" },
  { id: 23, color: "orange" },
  { id: 24, color: "green" },
  { id: 25, color: "green" },
  { id: 26, color: "green" },
  { id: 27, color: "black" },
  { id: 28, color: "black" },
  { id: 29, color: "green" },
  { id: 30, color: "green" },
  { id: 31, color: "green" },
  { id: 32, color: "blue" },
  { id: 33, color: "blue" },
  { id: 34, color: "blue" },
  { id: 35, color: "blue" },
  { id: 36, color: "black" },
  { id: 37, color: "black" },
  { id: 38, color: "blue" },
  { id: 39, color: "blue" },
  { id: 40, color: "purple" },
  { id: 41, color: "purple" },
  { id: 42, color: "purple" },
  { id: 43, color: "purple" },
  { id: 44, color: "purple" },
  { id: 45, color: "black" },
  { id: 46, color: "purple" },
  { id: 47, color: "purple" },
  { id: 48, color: "pink" },
  { id: 49, color: "pink" },
  { id: 50, color: "pink" },
  { id: 51, color: "pink" },
  { id: 52, color: "pink" },
  { id: 53, color: "black" },
  { id: 54, color: "black" },
  { id: 55, color: "pink" },
  { id: 56, color: "" },
  { id: 57, color: "" },
  { id: 58, color: "" },
  { id: 59, color: "" },
  { id: 60, color: "" },
  { id: 61, color: "" },
  { id: 62, color: "black" },
  { id: 63, color: "black" },
];

async function populateInitialData() {
  try {
    // create useful starting data
    console.log("create user");
    const me = { username: "test", password: "test1234" };
    const user = await createUser(me);
    console.log("create artwork");
    const image1 = {
      userId: user.id,
      imageArr: painting1,
      name: "rainbow",
      isPublic: true,
    };
    const image2 = {
      userId: user.id,
      imageArr: painting2,
      name: "rainbow2",
      borders: true,
    };
    await createArtwork(image1);
    await createArtwork(image2);
    console.log("done");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
