const Bible = require("../models/bible");

const getAllBooks = (req, res, next) => {
  Bible.getAll((err, rows) => {
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
    }
  });
};

module.exports = { getAllBooks };
