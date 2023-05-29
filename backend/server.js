const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db/config");
const Book = require("./model/Book");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//get all books recors
app.get("/books", async (req, res) => {
  const booksData = await Book.find({});
  res.status(200).send(booksData);
});
//post data
app.post("/books/add", async (req, res) => {
  try {
    const newItem = new Book(req.body);
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//delete
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  // Check if the ID is a valid ObjectId
  if (!mongoose.isValidObjectId(bookId)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid company ID" });
  }

  Book.findOneAndDelete({ _id: bookId })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
});
//update
app.put("/putting/:id", async (req, res) => {
  Book.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        no_of_pages: req.body.no_of_pages,
        published_at: req.body.published_at,
      },
    }
  )
    .then((result) => res.status(200).json({ updated: result }))
    .catch();
});

app.listen(5000, () => {
  console.log("server is running ");
});
