const express = require("express");
const app = express();
const PORT = require("./config.js");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
