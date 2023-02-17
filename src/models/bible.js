const db = require("../../database/db");

const getAll = (callback) => {
  const sql = `SELECT VERSES.CHAPTER, VERSES.VERSE_ID as verse, VERSES.VERSE_TEXT as text, BIBLES.BIBLE_NAME as translation_id, BOOKS.BOOK_ID, BOOKS.BOOK_NAME FROM VERSES INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID INNER JOIN BIBLES ON BOOKS.BIBLE_ID = BIBLES.ID ORDER BY BOOKS.BOOK_ORDER, VERSES.CHAPTER, VERSES.VERSE_ID`;

  db.all(sql, [], callback);
};

const getBookById = (bookId, callback) => {
  const sql = `SELECT VERSES.CHAPTER, VERSES.VERSE_ID as verse, VERSES.VERSE_TEXT as text, BIBLES.BIBLE_NAME as translation_id, BOOKS.BOOK_ID, BOOKS.BOOK_NAME FROM VERSES INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID INNER JOIN BIBLES ON BOOKS.BIBLE_ID = BIBLES.ID WHERE BOOKS.BOOK_ID = ? ORDER BY VERSES.CHAPTER, VERSES.VERSE_ID`;

  db.all(sql, [bookId], callback);
};

module.exports = { getAll, getBookById };
