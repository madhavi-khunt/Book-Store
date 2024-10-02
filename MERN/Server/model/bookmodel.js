const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      index: true, // Optional: Add an index for better query performance
    },
    publishyear: {
      type: Number, // Changed to Number type for better validation
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", schema);

module.exports = Book;
