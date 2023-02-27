const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");

router.get("/", async (req, res, next) => {
  try {
    const book = await booksController.getBooks();

    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
