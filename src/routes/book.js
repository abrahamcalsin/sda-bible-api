const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get("/:bookId", async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await bookController.getBook(bookId);

    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
