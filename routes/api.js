const workout = require("../models/index.js");
const db = require("../models");
const router = require("express").Router();

router.post("/api/exercise", (req, res) => {
    workout.create({})
        .then((dbworkout) => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
          });
});

router.put("/api/exercise", (req, res) => {
    workout.updateOne({})
        .then((dbworkouts) => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
          });
});


module.exports = router;