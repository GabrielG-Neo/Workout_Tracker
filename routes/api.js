const { Workout } = require("../models/index.js");
const db = require("../models");
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

router.put("/api/workouts", (req, res) => {
    Workout.updateOne({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
          });
});
