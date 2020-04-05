const db = require('../models')
const express = require('express');
const router = express.Router();
let authentication = require("./authentication")
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
    db.User.create({
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
        email: email,
        gender: gender
    }).then(function (result) {
        res.json({ success: true, user: {
                email: result.email,
                firstName: result.firstName,
                lastName: result.lastName,
                gender: result.gender,
                currentMood: result.currentMood,
                workouts: result.workouts,
                completedWorkouts: result.completedWorkouts
            }});
    }).catch(function (err) {
        console.log(err);
        res.json({ success: false, msg: 'Something went wrong try again later.' });
    });
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
                    res.json( {success: true, user: {
                            email: result.email,
                            firstName: result.firstName,
                            lastName: result.lastName,
                            gender: result.gender,
                            currentMood: result.currentMood,
                            workouts: result.workouts,
                            completedWorkouts: result.completedWorkouts
                        }} );

                    //
                } else {
                    res.json({ success: false, msg: 'Incorrect password'});
                }
            })
        } else {
            res.json({ success: false, msg: 'No user by that email!'})
        }
    }).catch(err => {
        console.log(err)
        res.send(err)
    });
});

router.put('/user/update', async (req, res) => {
    let userEmail = req.body.email;
    let time = req.body.time;
    let exercises = req.body.exercises;

    try {
        let user = await db.User.findOne({
            email: userEmail
        })

        let date = new Date()

        let completedWorkout = {
            time: time,
            day: date,
            exercises: exercises
        }

        // Promote users mood
        if( user.currentMood < 5 ) {
            user.currentMood = user.currentMood + 1
        }

        user.completedWorkouts.push( completedWorkout );

        await user.save();

        res.json( {success: true, user: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                currentMood: user.currentMood,
                workouts: user.workouts,
                completedWorkouts: user.completedWorkouts
            }})
    } catch (e) {
        res.json( {success: false})
    }

})

//send gender to front-end
router.get('/gender/:id', (req, res) => {
    // let gender = req.params.gender;
    let id = req.params.id;
    // console.log(req.params.gender);
    console.log(req.params.id);
    db.User.findOne({
        _id: id,
    }).then(data => {
        console.log(data.gender)
        res.json(data.gender)
    })
})

//get a random workout

router.get('/workout/random', (req, res) => {
    db.Workout.find({}).then(data => {
        let rand = Math.floor(Math.random() * data.length)
        res.json(data[rand])
    })
})

//get goals for doyourown page
// router.get('/goals', (req,res)=>{
//     res.json()
//     })

//this needs to update user "challenge of the day" everytime that button is pressed
// router.put("")


module.exports = router
