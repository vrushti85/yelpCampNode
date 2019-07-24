var express = require("express"),
    methodOverride = require('method-override'),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    flash = require("connect-flash"),
    localstrategy = require("passport-local"),
    User = require("./models/user"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./views/seeds")
//require routes
var campgroundRoutes = require("./routes/campground"),
    commentRoutes = require("./routes/comment"),
    indexdRoutes = require("./routes/index");
//
mongoose.connect("mongodb://localhost/YelpCamp", { useNewUrlParser: true });
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//app.use(methodOverride('_method'));
//console.log("****", __dirname);
//seedDB();
//passport configuration
app.use(require('express-session')({
    secret: 'keyboardcat',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});
app.use("/", indexdRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
//
app.listen(4000, function () {
    console.log("The yelcamp server started");
});
