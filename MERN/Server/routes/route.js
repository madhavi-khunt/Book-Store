const express = require("express");

const route = express.Router();

const bookcontroller = require("../controller/bookcontroller");

// Base path for book-related routes
route.get("/", bookcontroller.bookview); // Viewing a message
route.post("/books", bookcontroller.bookadd); // Adding a new book
route.get("/dataget", bookcontroller.dataget);
route.get("/book/:id", bookcontroller.editbook);
route.put("/book/:id", bookcontroller.updatebook);
route.delete("/book/:id", bookcontroller.datadelete);

module.exports = route;
