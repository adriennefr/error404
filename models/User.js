const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitmoodjiUser = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter your name"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Enter your lastname"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter your email"
    },
    password: {
        type: String,
        trim: true,
        required: "Enter your password"
    },
    gender: {
        type: String,
        trim: true,
        required: "didnt make your avatar."
    },
    workouts: [{
        exercises: [
            {
                type: String,
                trim: true,
            }
        ]
    }],
    currentMood: {
        type: Number,
        default: 5
    },
    completedWorkouts: [{
        time: {
            type: String,
            default: "0"
        },
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
    }]
});

const User = mongoose.model("User", FitmoodjiUser);

module.exports = User;
