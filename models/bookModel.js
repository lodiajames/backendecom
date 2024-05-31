const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  author: String,
  description: String,
  price: Number,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
