const express = require("express");
const Workout = require("../models/Workout");
const mongojs = require("mongojs");
// const { model } = require("../models/workout");
const Router = express.Router();

Router.get("/api/workouts", (req, res) => {
    Workout.find({}).then((workout) => {
        console.log(workout);
        res.json(workout);
    });
});

Router.post("/api/workouts/", (req, res) => {
    Workout.create(req.body).then((workout) => {
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

Router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({
            _id: mongojs.ObjectId(req.params.id)
        }, {
            $set: {
                day: req.body.day,
                exercises: [{
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
                    distance: req.body.distance
                }]
            }
        },

        (error, edited) => {
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


module.exports = Router;