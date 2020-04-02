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

const User = mongoose.model("User", FitmoodjiUser);

module.exports = User; 