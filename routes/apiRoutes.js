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
    console.log('signing up...')
    console.log(req.body)
    // let avatar;
    // if (gender.female) {
    //     avatar = "female"
    // } else if (gender.non) {
    //     avatar = "non-binary"
    // } else if (gender.male) {
    //     avatar = "male";
    // }

    let hashedPassword = await authentication.create(password);

    // Decrypt pasword function
    // after done, then use new variable in password 
    db.User.create({
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
        email: email,
        gender: gender
    }).then(function (user) {
        res.json(`User ${user.firstName} ${user.lastName} created with ${user.email}`);
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

//Login Route, Verify User
router.post('/login', (req, res) => {
    let userEmail = req.body.email;
    db.User.findOne({
        email: userEmail
    }).then(function (result) {
        if (result) {
            authentication.verify(req.body.password, function (hash) {
                if (result.password === hash.hash) {
                    req.user = {
                        email: result.email
                    }
                    res.json(result);
                } else {
                    res.json('Incorrect password!');
                }
            })
        } else {
            res.json('No user by that email!')
        }
    }).catch(err => {
        console.log(err)
        res.send(err)
    });
});

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
    console.log(db.Workout)
    db.Workout.find({}).then(data => {
        console.log(data)
        // let rand = Math.floor(Math.random() * data.length)
        // res.json(data[rand])
    })
})

//get goals for doyourown page
// router.get('/goals', (req,res)=>{
//     res.json()
//     })

//this needs to update user "challenge of the day" everytime that button is pressed
// router.put("")


module.exports = router