const mongoose = require("mongoose");

const schema = mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
});

const bschema = mongoose.model("bschema", schema);

module.exports = bschema;
