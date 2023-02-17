const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/bible.db", (err) => {
  if (err) {
    console.error(err.message);
  }

  console.log("Connected to bible.db database");
});

module.exports = db;
