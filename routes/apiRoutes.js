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
    db.User.find({email:email}).then(response=>{
        response.length ? res.json({success: false, msg: 'User already exists with that email'}) :
        //else run sign up
        db.User.create({
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
        email: email,
        gender: gender,
        currentMood: 3
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
                    result.completedWorkouts.map(a=>{
                         const now = moment(new Date());
                        const duration = moment.duration(now.diff(moment(a.day))).asHours()
                        duration < 168 ? recentWorkouts ++ : ''
                    })
                   
                    

                    const mood = recentWorkouts > 3 ? 5 : recentWorkouts;
                    res.json( {success: true, user: {
                            ...result._doc,
                            currentMood: mood,
                        }});

                    //
                } else {
                    console.log('user pw incorrect')
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

router.put('/user/update/:id', (req, res) => {
    let time = req.body.time;
    let exercises = req.body.exercises;
    db.User.findByIdAndUpdate(req.params.id,{$push:{completedWorkouts:{exercises: exercises, time: time, day:moment(new Date())}}})
    .then(data=> res.json({success:true, ...data}))

})

//send gender to front-end

//get a random workout

router.get('/workout/random', (req, res) => {
    db.Workout.find({}).then(data => {
        console.log(data)
        // let rand = Math.floor(Math.random() * data.length)
        res.json(data)
    })
})

//get a random quote
router.get('/tips', (req, res) => {
    db.Tips.find({}).then(data => {
        console.log(data)
        // let rand = Math.floor(Math.random() * data.length)
        res.json(data)
    })
})
//get goals for doyourown page
// router.get('/goals', (req,res)=>{
//     res.json()
//     })

//this needs to update user "challenge of the day" everytime that button is pressed
// router.put("")


module.exports = router
