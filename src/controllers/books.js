const Bible = require("../models/books");

const getBooks = () => {
  return new Promise((resolve, reject) => {
    Bible.getBooks((error, rows) => {
      if (error) {
        reject(error);
      } else {
        const book = rows.map((row) => {
          return {
            book_id: row.BOOK_ID,
            book_name_id: row.book_name_id,
            book_name: row.BOOK_NAME,
            chapters_count: row.chapters_count,
            translation_name: row.translation_name,
          };
        });

        resolve(book);
      }
    });
  });
};

module.exports = { getBooks };
