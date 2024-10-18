const { default: mongoose } = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookstore");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBConnect;
