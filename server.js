const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/Workout")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// routes
app.use(require("./routes/api.js"));

// app.get("/api/workouts", (req, res) => {
//     Workout.find({}).then((workout) => {
//         console.log(workout);
//         res.json(workout);
//     });
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
