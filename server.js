const path = require("path");
const router = require('express').Router();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("mongojs")

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://heizi:blackberry@back2basic.tqpzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


