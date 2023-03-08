import { getChaptersModel } from "~/models/chapters";

export const getChaptersController = (bookName: string) => {
  return new Promise((resolve, reject) => {
    getChaptersModel(bookName, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        const chapters = rows.map((row) => {
          return {
            book_id: row.BOOK_ID,
            chapter: row.CHAPTER,
            verses_count: row.VERSES,
          };
        });

        resolve(chapters);
      }
    });
  });
};
