const sqlite3 = require("sqlite3").verbose();

export const bibleDb = new sqlite3.Database(
  "./database/bible.db",
  (err: { message: string }) => {
    if (err) {
      console.error(err.message);
    }

    console.log("Connected to bible.db database");
  }
);
