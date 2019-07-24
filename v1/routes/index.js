var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
//root route
router.get("/", function (req, res) {
    res.render("landing");
});
//SHOW REGISTER FORM
router.get("/register", function (req, res) {
    res.render("register");
});
//HANDLING REGISTER PAGE
router.post("/register", function (req, res) {
    var uname = new User({ username: req.body.username });
    User.register(uname, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            req.flash("success", "Welcome to YelpCamp" + " " + user.username);
            res.redirect("/campgrounds");
        })
    });
});
//SHOW LOGIN FORM
router.get("/login", function (req, res) {
    res.render("login");
});
//HANDLING LOGIN 
router.post("/login", passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
}));
//LOGOUT
router.get("/logout", function (req, res) {
    req.flash("success", "you successfully Logged Out");
    req.logOut();
    res.redirect("/campgrounds");
});
//middleware
//check you are logged in or not
function IsLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}
module.exports = router;