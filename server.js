
const mongoose = require("mongoose");
const express = require("express");
const workRouter = require("./routes/api.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://heizi:blackberry@back2basic.tqpzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityt", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes
app.use(workRouter);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});