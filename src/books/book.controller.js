const bookModel = require("./book.model");

const createBook = async (req, res) => {
  try {
    const newBook = await bookModel({ ...req.body });
    await newBook.save();
    res.status(200).json({
      message: "Book Created Successfully",
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Unable to create book",
    });
  }
};

// get all books

const getAllBooks = async (req, res) => {
  try {
    const result = await bookModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      book: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Unable to get book",
    });
  }
};
// get single books

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({
        status: "Failed",
        message: "Book Not Found",
      });
    }
    res.status(200).json({
      book: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Unable to get book",
    });
  }
};

// update Book

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({
        status: "Failed",
        message: "Book Not Found",
      });
    }
    res.status(200).json({
      message: "Book updated succesfully",
      book: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Unable to update book",
    });
  }
};
// delete Book

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookModel.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        status: "Failed",
        message: "Book Not Found",
      });
    }
    res.status(200).json({
      message: "Book Deleted succesfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Unable to delete book",
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
