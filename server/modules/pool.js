
const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "react_gallery",
  max: 10,
  idleTimeoutMillis: 30000,
});

//Console log to run on successful connet and error on connection failure
pool.on("connect", () => console.log("Successfully connected to postgres"));

pool.on("error", (err) => console.log("Error in connection to postgres", err));

module.exports = pool;

