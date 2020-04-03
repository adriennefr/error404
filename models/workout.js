const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutChallenge = new Schema({
    generatedWorkout: [{
        exercises: [{
            type: String,
            trim: true
        }]
    }]
});

const Challenge = mongoose.model("woChallenge", WorkoutChallenge);

module.exports = Challenge; 