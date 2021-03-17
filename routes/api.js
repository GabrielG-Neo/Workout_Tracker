const Workout = require("../models/workout.js");
const db = require("../models");
const router = require("express").Router();



router.post("/api/workouts", (req, res) => {
    console.log(req.body)
   db.Workout.create(req.body, (err, workout) => {
       if (err) {
         res.send(err);
       } else {res.json(workout)}
   })
  });

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(req.params.id, 
    {$addfields: {}})
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {res.json(data)}
    })
})


module.exports = router