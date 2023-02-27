const db = require("../../database/db");

const getChapters = (bookName, callback) => {
  const sql = `SELECT VERSES.CHAPTER, COUNT(VERSES.ID) as verses_count, VERSES.BOOK_ID 
  FROM VERSES 
  INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID 
  WHERE BOOKS.BOOK_NAME_NORM = ? 
  GROUP BY VERSES.CHAPTER, VERSES.BOOK_ID 
  ORDER BY VERSES.CHAPTER ASC`;

  db.all(sql, [bookName], callback);
};

module.exports = { getChapters };
