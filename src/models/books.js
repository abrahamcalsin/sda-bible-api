const db = require("../../database/db");

const getBooks = (callback) => {
  const sql = `SELECT DISTINCT BOOKS.BOOK_ID, BOOKS.BOOK_NAME, COUNT(DISTINCT VERSES.CHAPTER) as chapters_count, BIBLES.BIBLE_NAME as translation_name 
  FROM BOOKS 
  INNER JOIN VERSES ON BOOKS.BOOK_ID = VERSES.BOOK_ID 
  INNER JOIN BIBLES ON BOOKS.BIBLE_ID = BIBLES.ID 
  GROUP BY BOOKS.BOOK_ID`;

  db.all(sql, [], callback);
};

module.exports = { getBooks };
