const Bible = require("../models/chapters");

const getChapters = (bookName) => {
  return new Promise((resolve, reject) => {
    Bible.getChapters(bookName, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        const chapters = rows.map((row) => {
          return {
            book_id: row.BOOK_ID,
            chapter: row.CHAPTER,
            verses_count: row.verses_count,
          };
        });

        resolve(chapters);
      }
    });
  });
};

module.exports = { getChapters };
