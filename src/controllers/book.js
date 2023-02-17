const Bible = require("../models/bible");

const getBook = (bookId) => {
  return new Promise((resolve, reject) => {
    Bible.getBookById(bookId, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        const book = rows.map((row) => {
          return {
            chapter: row.CHAPTER,
            verse: row.verse,
            text: row.text,
            translation_id: row.translation_id,
            book_id: row.BOOK_ID,
            book_name: row.BOOK_NAME,
          };
        });

        resolve(book);
      }
    });
  });
};

module.exports = { getBook };
