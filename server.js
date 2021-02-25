const mongodb = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema; // connnects to the models file.

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://heizi:blackberry@back2basic.tqpzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


