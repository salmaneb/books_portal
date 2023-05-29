const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  no_of_pages: Number,
  published_at: Date,
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
