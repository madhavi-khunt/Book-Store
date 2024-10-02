const express = require("express");
// import express from "express";
const PORT = 5000;

const db = require("./config/config");
const bookmodel = require("./model/bookmodel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/route"));

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
