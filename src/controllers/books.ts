import { getBooksModel } from "~/models/books";

export const getBooksController = () => {
  return new Promise((resolve, reject) => {
    getBooksModel((error, rows) => {
      if (error) {
        reject(error);
      } else {
        const book = rows.map((row) => {
          return {
            book_id: row.BOOK_ID,
            book_name_id: row.BOOK_NAME_NORM,
            book_name: row.BOOK_NAME,
            chapters_count: row.CHAPTERS,
            translation_name: row.BIBLE_NAME,
          };
        });

        resolve(book);
      }
    });
  });
};
