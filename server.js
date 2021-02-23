
const mongoose = require("mongoose");
const express = require("express");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://heizi:blackberry@back2basic.tqpzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityt", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.get("/", (req, res) => {
    continueWorkout.find({ workouts: true }, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  });

  app.post("/stats", ({ body }, res) => {
    const exercise = body;
    workouts.exercise = false;
    workouts.save(book, (error, saved) => {
      if (error) {
        console.log(error);
      } else {
        res.send(saved);
      }
      });
    });

  app.put("/exercises/:id", ({ params }, res) => {
    newWorkout.update({
        _id: mongojs.ObjectId(params.id)
      },
      {
        $set: {
          completed: true
        }
      }, (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});