const express = require("express");
const {
  createBook,
  getAllBooks,
  updateBook,
  getSingleBook,
  deleteBook,
} = require("./book.controller");
const router = express.Router();

// post a book
router.post("/create-book", createBook);

// get all books
router.get("/", getAllBooks);

// get single book by id
router.get("/:id", getSingleBook);

// update book by id
router.put("/edit/:id", updateBook);

// delete book by id
router.delete("/:id", deleteBook);

module.exports = router;
