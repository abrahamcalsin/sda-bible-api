import { getVersesModel } from "~/models/verses";

export const getVersesController = (bookName: string, chapter: string) => {
  return new Promise((resolve, reject) => {
    getVersesModel(bookName, chapter, (error, rows) => {
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
