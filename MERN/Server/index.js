const express = require("express");
const PORT = 5000;
const app = express();
const db = require("./config/config");
const bschema = require("./model/schema");

app.use(express.urlencoded());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
