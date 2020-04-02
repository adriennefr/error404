let mongoose = require("mongoose");
let dbWO = require("../models/workout");

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// description: Deadlifts x 10 reps 

let workoutSeed = [
    {
        target: "Lower body",
        exercises: "Deadlifts"
    },
    {
        target: "Lower body",
        exercises: "Squat Jumps"
    },
    {
        target: "Lower body",
        exercises: "Reverse Lunge"
    },
    {
        target: "Lower body",
        exercises: "Squats"
    },
    {
        target: "Lower body",
        exercises: "Side Lunge"
    },
    {
        target: "Upper body",
        exercises: "Push-ups"
    },
    {
        target: "Upper body",
        exercises: "Pull-ups"
    },
    {
        target: "Upper body",
        exercises: "Bent-over Rows"
    },
    {
        target: "Upper body",
        exercises: "Shoulder Press"
    },
    {
        target: "Upper body",
        exercises: "Chest Press"
    },
    {
        target: "Full body",
        exercises: "Burpees"
    },
    {
        target: "Full body",
        exercises: "Squat Jumps"
    },
    {
        target: "Full body",
        exercises: "Tuck Jumps"
    },
    {
        target: "Full body",
        exercises: "Jumping Jacks"
    },
    {
        target: "Full body",
        exercises: "High Knees"
    },
    {
        target: "Full body",
        exercises: "Burpees"
    },
    {
        target: "Core",
        exercises: "Crunches"
    },
    {
        target: "Core",
        exercises: "Sit-ups"
    },
    {
        target: "Core",
        exercises: "Mountain Climbers"
    },
    {
        target: "Core",
        exercises: "Bicyle Crunches"
    },
    {
        target: "Core",
        exercises: "Leg Raise"
    }
];

dbWO.Challenge.deleteMany({})
    .then(() => dbWO.Challenge.collection.insertMany(workoutSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });