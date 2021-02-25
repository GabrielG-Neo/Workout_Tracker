const { Workout } = require("../models/index.js");
const db = require("../models/workout.js");
const router = require("express").Router();





router.post("/api/workout", (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
          });
});



// router.get("/exercise", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/stats", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Workout: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });