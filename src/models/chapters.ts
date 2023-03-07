import { bibleDb } from "~/database/bibleDb";
import { ChapterRowProps } from "~/types/bible";

export const getChaptersModel = (
  bookName: string,
  callback: (error: Error | null, rows: ChapterRowProps[]) => void
) => {
  const sql = `SELECT VERSES.CHAPTER, COUNT(VERSES.ID) AS VERSES, VERSES.BOOK_ID 
  FROM VERSES 
  INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID 
  WHERE BOOKS.BOOK_NAME_NORM = ? 
  GROUP BY VERSES.CHAPTER, VERSES.BOOK_ID 
  ORDER BY VERSES.CHAPTER ASC`;

  bibleDb.all(sql, [bookName], callback);
};
