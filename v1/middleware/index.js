var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareobj = {};

middlewareobj.checkCampgroundOwnership = function (req, res, next) {
    //if uiser logged in?
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function (err, foundcampground) {
            if (err) {
                req.flash("error", "campground not find");
                res.redirect("back");
            } else {
                if (foundcampground.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    req.flash("error", "you don't have to permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "you need to be logged in first");
        res.redirect("back");
    }
}
middlewareobj.checkCommentOwnership = function (req, res, next) {
    //if uiser logged in?
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundcomment) {
            if (err) {
                res.redirect("back");
            } else {
                if (foundcomment.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    req.flash("error", "you don't have to permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "you need to be logged in first");
        res.redirect("back");
    }
}
middlewareobj.IsLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "Please Login First");
    res.redirect("/login");
}
module.exports = middlewareobj