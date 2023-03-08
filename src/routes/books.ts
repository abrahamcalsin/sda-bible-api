import express from "express";

import { getBooksController } from "~/controllers/books";

const booksRouter = express.Router();

booksRouter.get("/", async (_req, res, next) => {
  try {
    const book = await getBooksController();

    res.json(book);
  } catch (error) {
    next(error);
  }
});

export default booksRouter;
