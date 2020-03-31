const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitmoodjiUser = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter your name"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter your name"
    },
    password: {
        type: String,
        trim: true,
        required: "Enter your name"
    },
    ownWorkout: {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: String,
                trim: true,
                required: "Enter exercise, sets, and repetitions."
            }
        ]
    }
});

const Workout = mongoose.model("User", FitmoodjiUser);

module.exports = Workout; 