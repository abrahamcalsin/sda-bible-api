import { bibleDb } from "~/database/bibleDb";
import { VerseRowProps } from "~/types/bible";

export const getVersesModel = (
  bookName: string,
  chapter: string,
  callback: (error: Error | null, rows: VerseRowProps[]) => void
) => {
  const sql = `SELECT VERSES.IMAGE, VERSE_ID, VERSE_TEXT, SUBTITLE 
    FROM VERSES 
    INNER JOIN BOOKS ON VERSES.BOOK_ID = BOOKS.BOOK_ID 
    WHERE BOOKS.BOOK_NAME_NORM = ? AND CHAPTER = ? 
    ORDER BY VERSE_ID ASC`;

  bibleDb.all(sql, [bookName, chapter], callback);
};
