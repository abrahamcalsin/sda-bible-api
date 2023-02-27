const express = require("express");
const router = express.Router();
const { getVerses: verseController } = require("../controllers/verses");

router.get("/:bookName/chapters/:chapter/verses", async (req, res, next) => {
  try {
    const bookName = req.params.bookName;
    const chapter = req.params.chapter;
    const verses = await verseController(bookName, chapter);

    res.json(verses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
