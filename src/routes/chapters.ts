import express from "express";

import { getChaptersController } from "~/controllers/chapters";

const chaptersRouter = express.Router();

chaptersRouter.get("/:bookName/chapters", async (req, res, next) => {
  try {
    const bookName = req.params.bookName;
    const chapters = await getChaptersController(bookName);

    res.json(chapters);
  } catch (error) {
    next(error);
  }
});

export default chaptersRouter;
