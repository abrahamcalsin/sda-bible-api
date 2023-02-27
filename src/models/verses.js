const db = require("../../database/db");

const getVerses = (bookName, chapter, callback) => {
  const sql = `SELECT VERSES.IMAGE, VERSE_ID, VERSE_TEXT, SUBTITLE 
    FROM VERSES 
    INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID 
    WHERE BOOKS.BOOK_NAME_NORM = ? AND CHAPTER = ? 
    ORDER BY VERSE_ID ASC`;

  db.all(sql, [bookName, chapter], callback);
};

module.exports = { getVerses };
