const express = require("express");
const router = express.Router();
const chapterController = require("../controllers/chapters");

router.get("/:bookName/chapters", async (req, res, next) => {
  try {
    const bookName = req.params.bookName;
    const chapters = await chapterController.getChapters(bookName);

    res.json(chapters);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
