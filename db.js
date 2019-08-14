// Import The dotenv module.
// Call it `.config()` Method
require("dotenv").config();

const pgp = require("pg-promise")();

const db = pgp({
  host: process.env.DB_Host,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});
console.log("go to lunch");

db.any(
  `

select * from todos

`
)
  .then(data => {
    console.log("here is the data:");
    console.log(data);
  })
  .catch(err => {
    console.log("Uh Oh.");
    console.log(err);
  });

module.exports = db;
