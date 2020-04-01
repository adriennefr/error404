const db = require('../models')
const express = require('express');
const router = express.Router();
const schema = require("../models/index");
let authentication = require("./authRoute")

    // router.route('/signup') 
    // // req.body is the information coming from the front-end. Usually it's an object.
    // .post(userController.create);    

    //this is a sign up route and to create a new user...
    router.post("/signup", async function(req, res) {
        //console.log(req.body);
        let hashedPassword = await authentication.create(req.body.password);
        //const { name, email, password } = req.body;
        // Decrypt pasword function
        // after done, then use new variable in password 
        db.User.create({
            name: req.body.firstName,
            lastName: req.body.lastName,
            hash: hashedPassword.hash,
            salt: hashedPassword.salt,
            email: req.body.email
        }).then(function(user) {
            res.json(`User ${name} created with ${email}`);
        }).catch(function(err) {
            console.log(err);
        });
    });

    //Login Route, Verify User
    router.post('/login', (req,res)=>{
        let userEmail = req.body.email;
        let userPass = req.body.password;
        db.User.findall({
            where: {
                email: userEmail,
                password: userPass,
            }
        }).then(function (results) {
            console.log(results);
            passport.verify(req.body.password, result.salt, function(hash){
                    if (result.hash === hash.hash){
                        req.results.user = {
                            email: result.userEmail,   
                        }
                        res.json({login:true});
                    }else{
                        res.json({login: false});
                    }
            })
        }).catch(err=> {
            res.send(err)
        });
       });
//this needs to update user "challenge of the day" everytime that button is pressed
       router.put("")



module.exports = router