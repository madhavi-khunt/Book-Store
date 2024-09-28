const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/BOOKSTORE");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) return console.error(err);
  console.log("Connected to MongoDB");
});

module.exports = db;
