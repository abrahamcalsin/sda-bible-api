import express from "express";

import { getVersesController } from "~/controllers/verses";

const versesRouter = express.Router();

versesRouter.get(
  "/:bookName/chapters/:chapter/verses",
  async (req, res, next) => {
    try {
      const bookName = req.params.bookName;
      const chapter = req.params.chapter;
      const verses = await getVersesController(bookName, chapter);

      res.json(verses);
    } catch (error) {
      next(error);
    }
  }
);

export default versesRouter;
