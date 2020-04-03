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
        exercises: ["Deadlifts (3 sets, 10 reps)",
        "Push-ups (3 sets, 10 reps)",
        "Burpees (3 sets, 10 reps)",
        "Crunches (2 sets, 25 reps)"
        ]
    },
    {
        exercises: ["Squat Jumps (3 sets, 15 reps)",
        "Pull-ups (3 sets, 8 reps)",
        "Squat Jumps (3 sets, 12 reps)",
        "Sit-ups (3 sets, 12 reps)"
        ]
    },
    {
        exercises: ["Reverse Lunge (3 sets, 10 reps per side)",
        "Bent-over Rows (3 sets, 10 reps)",
        "Tuck Jumps (3 sets, 8 reps)",
        "Mountain Climbers (3 sets, 15 reps per side)"
        ]
    },
    {
        exercises: ["Squat (3 sets, 15 reps)",
        "Shoulder Press (3 sets, 10 reps)",
        "Jumping Jacks (3 sets, 25 reps)",
        "Bicycle Crunches (3 sets, 12 reps per side)"
        ]
    },
    {
        exercises: ["Side Lunge (3 sets, 10 reps per side)",
        "Chest Press (3 sets, 10 reps)",
        "High Knees (3 sets, 15 reps per leg)",
        "Leg Raise (3 sets, 12 reps)"
        ]
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