// code to build and initialize DB goes here
const {
  client,
  // other db methods
  createUser,
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
      borders boolean,
      is_public boolean DEFAULT false,
      name VARCHAR(255)
    );
    `);
    console.log("tables created");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    console.log("create user");
    const me = { username: "test", password: "test1234" };
    const user = await createUser(me);
    console.log("done");
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
