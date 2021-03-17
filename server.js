const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const router = require('express').Router();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/api.js"));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://heizi:blackberry@back2basic.tqpzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
  });

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
  });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


