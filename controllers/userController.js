const db = require('../models/user');

// Define methods for userController
// export module for all methods
// create user method
// we need to access user object in our db and run create
module.exports = {
    create: function(req, res) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(function(user) {
            // res.send({redirect: "/"})
            res.json("hello world");
        }).catch(function (err) {
            console.log(err);
        })
    }
}