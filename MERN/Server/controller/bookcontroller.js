const bookmodel = require("../model/bookmodel");

const bookadd = async (req, res) => {
  try {
    // Log the incoming request body to see the data
    console.log("Request Body:", req.body);

    // Check for missing fields and respond with an error
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publish year",
      });
    }

    // Create a new book document
    const book = {
      title: req.body.title,
      author: req.body.author,
      publishyear: Number(req.body.publishyear), // Convert to Number
    };

    // Save the book to the database
    const books = await bookmodel.create(book);

    // Respond with a success message and the newly created book
    return res.status(201).json({
      message: "Book added successfully",
      book: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Test route to view a message
const bookview = (req, res) => {
  res.send("Book endpoint is working!");
};

const dataget = async (req, res) => {
  try {
    const books = await bookmodel.find({});
    res.status(200).send(books); // Use 200 for successful data retrieval
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const editbook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookmodel.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book); // Return the found book
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const updatebook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publish year",
      });
    }
    const { id } = req.params;
    const result = await bookmodel.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // Get the updated book
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).json({
      // Return 200 for a successful update
      message: "Book updated successfully",
      book: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const datadelete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await bookmodel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).json({
      // Use 200 for successful deletion
      message: "Book deleted successfully",
      book: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  bookadd,
  bookview,
  dataget,
  editbook,
  updatebook,
  datadelete,
};
