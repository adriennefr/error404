const db = require('../models')
const express = require('express');
const router = express.Router();
let authentication = require("./authentication");
const moment = require('moment');
// console.log(db.Workout);

// router.route('/signup')
// // req.body is the information coming from the front-end. Usually it's an object.
// .post(userController.create);

//this is a sign up route and to create a new user...
router.post("/signup", async function (req, res) {
    //console.log(req.body);
    const { firstName, lastName, email, password, gender } = req.body;

    let hashedPassword = await authentication.create(password);

    // Decrypt pasword function
    // after done, then use new variable in password
    db.User.find({ email: email }).then(response => {
        response.length ? res.json({ success: false, msg: 'User already exists with that email' }) :
            //else run sign up
            db.User.create({
                firstName: firstName,
                lastName: lastName,
                password: hashedPassword,
                email: email,
                gender: gender,
                currentMood: 3
            }).then(function (result) {
                res.json({
                    success: true, user: {
                        email: result.email,
                        firstName: result.firstName,
                        lastName: result.lastName,
                        gender: result.gender,
                        currentMood: result.currentMood,
                        workouts: result.workouts,
                        completedWorkouts: result.completedWorkouts,
                        id: result.id
                    }
                });
            }).catch(function (err) {
                console.log(err);
                res.json({ success: false, msg: 'Something went wrong try again later.' });
            });
    })
});

//Login Route, Verify User
router.post('/signin', (req, res) => {
    let userEmail = req.body.email;
    db.User.findOne({
        email: userEmail
    }).then(function (result) {
        if (result) {
            authentication.verify(req.body.password, function (hash) {
                if (result.password === hash.hash) {
                    console.log(result.completedWorkouts)
                    let recentWorkouts = 1
                    result.completedWorkouts.map(a => {
                        const now = moment(new Date());
                        const duration = moment.duration(now.diff(moment(a.day))).asHours()
                        duration < 168 ? recentWorkouts++ : ''
                    })



                    const mood = recentWorkouts > 3 ? 5 : recentWorkouts;
                    res.json({
                        success: true, user: {
                            ...result._doc,
                            currentMood: mood,
                        }
                    });

                    //
                } else {
                    console.log('user pw incorrect')
                    res.json({ success: false, msg: 'Incorrect password' });
                }
            })
        } else {
            res.json({ success: false, msg: 'No user by that email!' })
        }
    }).catch(err => {
        console.log(err)
        res.send(err)
    });
});

router.put('/user/update/:id', (req, res) => {
    let time = req.body.time;
    let exercises = req.body.exercises;
    db.User.findByIdAndUpdate(req.params.id, { $push: { completedWorkouts: { exercises: exercises, time: time, day: moment(new Date()) } } })
        .then(data => res.json({ success: true, ...data }))

})

//send gender to front-end

//get a random workout

router.get('/workouts', (req, res) => {
    db.Workout.find({}).then(data => {
        console.log(data);
        // let rand = Math.floor(Math.random() * data.length);
        res.json(data);
    })
})

//get a random quote
router.get('/tips', (req, res) => {
    db.Tips.find({}).then(data => {
        console.log(data);
        let rand = Math.floor(Math.random() * data.length);
        res.json(data[rand]);
    })
})

//log workouts
router.get('/log/:id', (req, res) => {
    db.User.findById(req.params.id)
    .then(data => {
        res.json(data)
    })
})

router.post('/createdummy', (req,res)=>{
    db.Tips.insertMany([
        {tip: ["The only bad workout is the one that did not happen."]},
        {tip: ["You're only one workout away from having a good mood."]},
        {tip: ["If it doesn't challenege you it won't change you."]},
        {tip: ["Good things take time."]},
        {tip: ["Constantly challenge yourself."]},
        {tip: ["Be stronger than your excuses."]},
        {tip: ["The harder you fight, the higher you soar."]},
        {tip: ["No goal was ever met without a little sweat."]},
        {tip: ["Use the talk test. If you can't speak a sentence or two with each breath, you're pushing too hard."]},
        {tip: ["Be sure to hydrate throughout the day. It takes a couple of hours for your body to absorb the water, so you can’t just drink right before exercise."]},
        {tip: ["Pick a cardio exercise you enjoy. It’s no fun to exercise if you hate it. And you won’t keep it up for very long. Pick something that’s fun."]},
        {tip: ["Exercising with friends is a great way to have fun while training and will also keep you accountable."]},
        {tip: ["Remember to cool down. Allow for 5-10 minutes of stretching after each workout. This helps your heart rate return to normal and can prevent injury."]},
        {tip: ["Reframe your negative thoughts. Chances are, you’re harder on yourself than anyone else in your life."]},
        {tip: ["Set Goals For Your Fitness Training And Be Specific. The more specific you are in terms of your goals, the easier it will be to fulfil them."]},
        {tip: ["A Huge De-Motivator Is Overtraining. It’s an easy trap to fall into but please don’t increase the duration or intensity of your training too quickly."]},
        {tip: ["The same way we grow our bodies we must attend to our mind and spirit."]},
        {tip: ["Your life is a journey that is always evolving in the present, taking shape based on the choices you make every single moment."]},
        {tip: ["The mind is just like a muscle - the more you exercise it, the stronger it gets and the more it can expand."]}
    ]).then(response=>{
        db.Workout.insertMany([
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
        ]).then(success=> res.json('success!'))
    })
})
//get goals for doyourown page
// router.get('/goals', (req,res)=>{
//     res.json()
//     })

//this needs to update user "challenge of the day" everytime that button is pressed
// router.put("")


module.exports = router
