const express = require("express");
const { createBook } = require("./book.controller");
const router = express.Router();

router.post("/create-book", createBook);

module.exports = router;
