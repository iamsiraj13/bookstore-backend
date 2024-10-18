const createBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
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

module.exports = {
  createBook,
};
