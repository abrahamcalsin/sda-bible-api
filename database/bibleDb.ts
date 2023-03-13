import path from "node:path";

const sqlite3 = require("sqlite3").verbose();

const projectDir = process.cwd();

const databaseDir = path.join(projectDir, "database", "bible.db");

export const bibleDb = new sqlite3.Database(
  databaseDir,
  (err: { message: string }) => {
    if (err) {
      console.error(err, { databaseDir });

      return;
    }

    console.log("Connected to bible.db database", { databaseDir });
  }
);
