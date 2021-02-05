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




module.exports = Router;