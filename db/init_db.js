// code to build and initialize DB goes here
const {
  client,
  // other db methods
  createUser,
  createArtwork,
} = require("./index");

async function buildTables() {
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
      saving_date timestamp NOT NULL DEFAULT now()
    );
    `);
  console.log("tables created");
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

const image3 =
  "#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-#b9d9e9-yellow-#b9d9e9-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-yellow-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-yellow-yellow-yellow-yellow-yellow-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-yellow-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-#b9d9e9-yellow-#b9d9e9-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-yellow-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-white-white-white-white-white-white-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-#b9d9e9-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-orange-#b9d9e9-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange"
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image4 =
  "pink-pink-pink-pink-pink-pink-pink-pink-red-red-red----red-red-red-purple-purple-purple-purple-purple-purple-purple-pink-pink-pink-pink-pink-pink-pink-red-red-red-red-red--red-red-red-red-red-purple-purple-purple-purple-purple-purple-pink-pink-pink-pink-pink-pink--red-red-red-red-red-red-red-red-red-red-red--purple-purple-purple-purple-purple-pink-pink-pink-pink-pink---red-red-red-red-red-red-red-red-red-red-red---purple-purple-purple-purple-purple-pink-pink-pink-purple-purple-purple--red-red-red-red-red-red-red-red-red--#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple-pink-purple-purple-purple-purple-purple--red-red-red-red-red-red-red--#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-#b9d9e9-purple-purple-purple-purple-purple-purple-purple-purple---red-red-red-red-red---#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple-purple-purple-purple-pink-pink-pink-red-red-red-pink-pink-pink-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple-purple-purple-pink-pink-pink-pink-pink-red-pink-pink-pink-pink-pink-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple-purple--pink-pink-pink-pink-pink-pink-pink-pink-pink-pink-pink--#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple---pink-pink-pink-pink-pink-pink-pink-pink-pink-pink-pink---#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-#b9d9e9-#b9d9e9-#b9d9e9--pink-pink-pink-pink-pink-pink-pink-pink-pink--red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9--pink-pink-pink-pink-pink-pink-pink--red-red-red-red-red-#b9d9e9-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9---pink-pink-pink-pink-pink---red-red-red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-pink-pink-pink-purple-purple-purple-red-red-red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-purple-purple-pink-purple-purple-purple-purple-purple-red-red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9--purple-purple-purple-purple-purple-purple-purple-purple-purple-purple-purple--red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9---purple-purple-purple-purple-purple-purple-purple-purple-purple-purple-purple---red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-red-red-red--purple-purple-purple-purple-purple-purple-purple-purple-purple--pink-pink-pink-red-red-red-red-red-#b9d9e9-red-red-red-red-red--purple-purple-purple-purple-purple-purple-purple--pink-pink-pink-pink-pink-red-pink-red-red-red-red-red-red-red-red---purple-purple-purple-purple-purple---pink-pink-pink-pink-pink-pink-pink-red-red-red-red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-purple-purple-purple-#b9d9e9-#b9d9e9-#b9d9e9-pink-pink-pink-pink-pink-pink-pink-red-red-red-red-red-red-red-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-purple-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-pink-pink-pink-pink-pink-pink-red-red-red-red-red-red--#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9-#b9d9e9--pink-pink-pink-pink-pink"
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image5 =
  "yellow-orange-yellow-orange-red-orange-orange-orange-orange-red-orange-red-green-pink-green-pink-orange-orange-yellow-orange-red-red-red-red-red-red-orange-red-green-pink-green-green-yellow-yellow-yellow-orange-orange-orange-orange-orange-orange-orange-orange-red-green-pink-pink-pink----red-red-red-red-red-red-red-red-red-green-green-green-green-blue-blue--red-purple-purple-purple-purple-purple-purple-purple-purple-pink-pink-pink-pink--blue--red-purple-red-red-red-red-red-red-purple-pink-purple-purple-purple--blue--red-purple-red-purple-purple-purple-purple-red-purple-pink-purple-pink-pink--blue--red-purple-red-purple-red-red-purple-red-purple-pink-purple-pink-purple--blue--red-purple-red-purple-purple-red-purple-red-purple-pink-purple-pink-pink--blue--red-purple-red-red-red-red-purple-red-purple-pink-purple-purple-purple-blue-blue--red-purple-purple-purple-purple-purple-purple-red-purple-pink-pink-pink-pink----red-red-red-red-red-red-red-red-purple-purple-purple-purple-purple-black-black-black-gray-gray-gray-gray-gray-gray-gray-gray-blue-blue-blue-blue-blue---black-gray-black-black-black-black-black-black-gray-blue-green-green-green-green-black--black-gray-black-gray-gray-gray-gray-black-gray-blue-green-blue-blue-blue-black--black-gray-black-gray-black-black-gray-black-gray-blue-green-blue-green-green"
    .split("-")
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image6 =
  "-----------------------------------gray-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue---------------------gray-blue-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue-blue-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue---------------------gray-blue-blue-yellow-blue-yellow-blue-yellow-blue-yellow-blue-blue-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue---------------------gray-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray--------------------------------gray-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray------------white-white-------------------gray-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray--------------------------------gray-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray--------------------------------gray-----------orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-----------gray-------------black------black-------------gray-----------orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-----------gray-----------orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-orange-----------gray------------black--------black-----------green-gray-green-----------black--------black---------green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green"
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image7 =
  "#d4f3f7-#d4f3f7-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-yellow-yellow-yellow-yellow-yellow-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-#d4f3f7-#d4f3f7-red-red-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-yellow-green-yellow-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-red-red-red-red-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-yellow-green-green-green-yellow-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-red-red-red-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-red-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-red-#d4f3f7-red-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-blue-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-red-#d4f3f7-#d4f3f7-#d4f3f7-red-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-blue-green-green-green-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-red-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-red-green-green-green-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-blue-green-green-green-green-red-green-blue-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-green-green-blue-green-green-green-green-green-green-red-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-red-green-green-green-green-green-blue-green-green-green-green-green-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-blue-green-green-green-green-blue-green-green-green-green-green-red-green-green-blue-green-green-green-green-#d4f3f7-#d4f3f7-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#573b00-#573b00-#573b00-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#573b00-#573b00-#573b00-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#573b00-#573b00-#573b00-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-#d4f3f7-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green"
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image8 =
  "#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-black-black-black-black-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-black-red-red-red-red-red-red-black-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-#f7e9f6-#f7e9f6-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-#f7e9f6-white-white-#f7e9f6-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-#f7e9f6-white-white-#f7e9f6-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-red-red-#f7e9f6-#f7e9f6-red-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-black-black-red-red-red-red-red-red-red-red-red-red-red-red-red-red-red-black-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-#d2f3f4-green-green-green-black-black-black-red-red-black-black-black-red-red-red-red-red-red-red-black-black-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-black-black-black-white-white-white-black-red-red-red-black-black-black-black-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-gray-black-black-white-white-white-black-black-black-black-black-black-white-gray-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-gray-white-black-white-white-white-black-black-black-black-white-white-white-gray-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-gray-white-black-black-black-white-white-white-white-white-white-gray-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-gray-white-white-white-white-white-white-white-gray-gray-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-black-gray-gray-gray-gray-gray-gray-black-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-black-black-black-black-black-black-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green-green"
    .split("-")
    .map((el) => {
      return { color: el };
    });
const image9 =
  "pink-pink-pink-pink-pink-green-green-green-red-red-red-black-black-black-black-black-purple-purple-purple-purple-purple-orange-green-red-red-red-red-red-black-black-black-blue--purple-purple-purple-orange-orange-orange-gray-gray-gray-gray-gray-pink-black-blue-blue-black-blue-purple-orange-orange-orange-orange-orange-gray-gray-gray-pink-pink-pink-green-green-blue-blue-blue-yellow-yellow-yellow-yellow-yellow--gray-pink-pink-pink-pink-pink-green-blue-blue-blue-blue-yellow-yellow-yellow----purple-purple-purple-purple-purple-orange-green-green-green-green-red-yellow------purple-purple-purple-orange-orange-green-green-green-red-red-red-black-black-black-black-black-blue-purple-orange-orange-orange-orange-green-red-red-red-red-red-black-black-black-blue-blue-blue-yellow-yellow-yellow-orange-orange-gray-gray-gray-gray-gray-pink-black-blue-blue-blue-blue-blue-yellow-yellow-orange-orange-orange-gray-gray-gray-pink-pink-pink-green-green-green-green-green-red-yellow-yellow-yellow-yellow--gray-pink-pink-pink-pink-pink-green-green-green-red-red-red-yellow-yellow----purple-purple-purple-purple-purple-orange-green-red-red-red-red-yellow------purple-purple-purple-orange-orange-orange-gray-gray-gray-gray-red-black-black-black-black-black-blue-purple-orange-orange-orange-orange-orange-gray-gray-gray-red-red-black-black-black-blue-blue-blue-yellow-yellow-yellow-yellow-yellow--gray-pink"
    .split("-")
    .map((el) => {
      return { color: el };
    });

async function populateInitialData() {
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
  const art3 = {
    userId: user.id,
    imageArr: image3,
    name: "Sky",
    isPublic: true,
  };
  const art4 = {
    userId: user.id,
    imageArr: image4,
    name: "Hearts",
    isPublic: true,
  };
  const art5 = {
    userId: user.id,
    imageArr: image5,
    name: "Spiral",
    isPublic: true,
  };
  const art6 = {
    userId: user.id,
    imageArr: image6,
    name: "Flag",
    isPublic: true,
  };
  const art7 = {
    userId: user.id,
    imageArr: image7,
    name: "Tree",
    isPublic: true,
  };
  const art8 = {
    userId: user.id,
    imageArr: image8,
    name: "Pokeball",
    isPublic: true,
  };
  const art9 = {
    userId: user.id,
    imageArr: image9,
    name: "Triangles",
    isPublic: true,
  };
  await createArtwork(image1);
  await createArtwork(image2);
  await createArtwork(art3);
  await createArtwork(art4);
  await createArtwork(art5);
  await createArtwork(art6);
  await createArtwork(art7);
  await createArtwork(art8);
  await createArtwork(art9);

  console.log("done");
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
