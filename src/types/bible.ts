interface BookProps {
  bookId: number;
  bookNameId: string;
  bookName: string;
  chapters: number;
  bibleName: string;
}

interface BookRowProps {
  BOOK_ID?: BookProps["bookId"];
  BOOK_NAME?: BookProps["bookName"];
  BIBLE_NAME?: BookProps["bibleName"];
  BOOK_ORDER?: number;
  TESTAMENT?: number;
  BOOK_NAME_NORM?: string;
  CHAPTERS?: BookProps["chapters"];
}

interface ChapterProps {
  bookId: BookProps["bookId"];
  chapter: number;
  verses: number;
}

interface ChapterRowProps {
  ID?: number;
  CHAPTER?: ChapterProps["chapter"];
  BOOK_ID?: ChapterProps["bookId"];
  VERSES?: ChapterProps["verses"];
}

interface VerseProps {
  verse: number;
  text: string;
  subtitle: string;
}

interface VerseRowProps {
  VERSE_ID?: VerseProps["verse"];
  VERSE_TEXT?: VerseProps["text"];
  SUBTITLE?: VerseProps["subtitle"];
}

export type {
  BookProps,
  BookRowProps,
  ChapterProps,
  ChapterRowProps,
  VerseProps,
  VerseRowProps,
};
