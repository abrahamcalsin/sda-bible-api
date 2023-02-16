const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

const db = new sqlite3.Database("bible.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to bible.db database");
});

app.get("/bible", (req, res) => {
  db.all(
    `SELECT VERSES.CHAPTER, VERSES.VERSE_ID as verse, VERSES.VERSE_TEXT as text, BIBLES.BIBLE_NAME as translation_id, BOOKS.BOOK_ID, BOOKS.BOOK_NAME FROM VERSES INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID INNER JOIN BIBLES ON BOOKS.BIBLE_ID = BIBLES.ID ORDER BY BOOKS.BOOK_ORDER, VERSES.CHAPTER, VERSES.VERSE_ID`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal server error");
      } else {
        const bible = rows.map((row) => {
          return {
            chapter: row.CHAPTER,
            verse: row.verse,
            text: row.text,
            translation_id: row.translation_id,
            book_id: row.BOOK_ID,
            book_name: row.BOOK_NAME,
          };
        });
        res.json(bible);

        console.log(bible);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000 port");
});
