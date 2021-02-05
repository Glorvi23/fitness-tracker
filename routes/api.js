const express = require("express");
const Workout = require("../models/Workout");
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

Router.put("/api/workouts/", (req, res) => {
    Workout.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: true
            }
        },

        (error, edited) => {
            if(error) {
                console.log(error);
                res.send(error);
            }else{
                console.log(edited);
                res.send(edited);
            }
        }
    );
});


module.exports = Router;