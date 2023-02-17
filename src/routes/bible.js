const express = require("express");
const bibleController = require("../controllers/bible");

const router = express.Router();

router.get("/", bibleController.getAllBooks);

module.exports = router;
