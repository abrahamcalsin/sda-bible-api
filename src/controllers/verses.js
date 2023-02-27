const Bible = require("../models/verses");

const getVerses = (bookName, chapter) => {
  return new Promise((resolve, reject) => {
    Bible.getVerses(bookName, chapter, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        const verses = rows.map((row) => {
          return {
            verse: row.VERSE_ID,
            text: row.VERSE_TEXT,
            subtitle: row.SUBTITLE,
          };
        });

        resolve(verses);
      }
    });
  });
};

module.exports = { getVerses };
