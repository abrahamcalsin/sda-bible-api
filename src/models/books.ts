import { bibleDb } from "~/database/bibleDb";
import { BookRowProps } from "~/types/bible";

export const getBooksModel = (
  callback: (error: Error | null, rows: BookRowProps[]) => void
) => {
  const sql = `SELECT DISTINCT BOOKS.BOOK_ID, BOOKS.BOOK_NAME_NORM, BOOKS.BOOK_NAME, COUNT(DISTINCT VERSES.CHAPTER) AS CHAPTERS, BIBLES.BIBLE_NAME 
  FROM BOOKS 
  INNER JOIN VERSES ON BOOKS.BOOK_ID = VERSES.BOOK_ID 
  INNER JOIN BIBLES ON BOOKS.BIBLE_ID = BIBLES.ID 
  GROUP BY BOOKS.BOOK_ID`;

  bibleDb.all(sql, [], callback);
};
