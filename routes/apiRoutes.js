const db = require('../models')
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

    // router.route('/signup') 
    // // req.body is the information coming from the front-end. Usually it's an object.
    // .post(userController.create);    

    router.post("/signup", function(req, res) {
        // console.log(req.body);
        const { name, email, password } = req.body;
        db.User.create({
            name: name,
            email: email,
            password: password
        }).then(function(user) {
            res.json(`User ${name} created with ${email}`);
        }).catch(function(err) {
            console.log(err);
        })
    })
    router.post('/challenge', (req,res)=>{
        
    })



module.exports = router