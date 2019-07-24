var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")
var middleware = require("../middleware");
//show all campgrounds
router.get("/", function (req, res) {
    Campground.find({}, function (err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds: allcampgrounds });
        }
    });
});
//create- new campgrounds
router.post("/", middleware.IsLoggedIn, function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = { name: name, price: price, image: image, description: desc, author: author };
    //create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to campground page
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});
//new -show form to a campground
router.get("/new", middleware.IsLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});
//show -more info about one campground
router.get("/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    Campground.findById(id).populate("comments").exec(function (err, foundcampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundcampground);
            //render show template with that campground
            res.render("campgrounds/show", { campground: foundcampground });
        }
    });
});
//edit campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, foundcampground) {
        res.render("campgrounds/edit", { campground: foundcampground });
    });
});
// update campground
//find and update campground
router.put("/:id", function (req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, upadtedcampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            //redirect somewhere
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});
//Destroy campground
router.delete("/:id", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndRemove(req.params.id, function (err, removecampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;