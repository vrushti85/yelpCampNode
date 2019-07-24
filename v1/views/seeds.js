var mongoose = require("mongoose"),
    Campground = require("../models/campground"),
    Comment = require("../models/comment");
// var Data = [
//     {
//         name: "Butterfly",
//         image: "https://cdn.pixabay.com/photo/2015/04/28/13/24/butterfly-743549_960_720.jpg",
//         description: "In a couple of old spreadsheets which I started like 4 years ago, if the width of the box I was typing in only extended until the word then the spreadsheet would continue the rest of the text (in this case, everything from the word  onwards) in a 2nd line below the first line, but within the same box/cell.  In other words, it would create multiple vertical lines of text within one box, and it would do this by default.  However, I just recently created a new spreadsheet for the first time in a couple of years and it does not do this anymore; instead, it (the text) will continue to extend horizontally beyond the boundaries of the width of the cell, unless there is text in the next cell(s) over to the right, in which it just won't show the extra text at all.  ",
//     },
//     {
//         name: "Bird",
//         image: "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295431_960_720.jpg",
//         description: "In a couple of old spreadsheets which I started like 4 years ago, if the width of the box I was typing in only extended until the word then the spreadsheet would continue the rest of the text (in this case, everything from the word onwards) in a 2nd line below the first line, but within the same box/cell.  In other words, it would create multiple vertical lines of text within one box, and it would do this by default.  However, I just recently created a new spreadsheet for the first time in a couple of years and it does not do this anymore; instead, it (the text) will continue to extend horizontally beyond the boundaries of the width of the cell, unless there is text in the next cell(s) over to the right, in which it just won't show the extra text at all.  ",
//     },
//     {
//         name: "cutee",
//         image: "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg",
//         description: "In a couple of old spreadsheets which I started like 4 years ago, if the width of the box I was typing in only extended until the word then the spreadsheet would continue the rest of the text  in a 2nd line below the first line, but within the same box/cell.  In other words, it would create multiple vertical lines of text within one box, and it would do this by default.  However, I just recently created a new spreadsheet for the first time in a couple of years and it does not do this anymore; instead, it (the text) will continue to extend horizontally beyond the boundaries of the width of the cell, unless there is text in the next cell(s) over to the right, in which it just won't show the extra text at all.  ",
//     },
//     {
//         name: "eleee",
//         image: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg",
//         description: "In a couple of old spreadsheets which I started like 4 years ago, if the width of the box I was typing in only extended until the word then the spreadsheet would continue the rest of the text (in this case, everything from the word  onwards) in a 2nd line below the first line, but within the same box/cell.  In other words, it would create multiple vertical lines of text within one box, and it would do this by default.  However, I just recently created a new spreadsheet for the first time in a couple of years and it does not do this anymore; instead, it (the text) will continue to extend horizontally beyond the boundaries of the width of the cell, unless there is text in the next cell(s) over to the right, in which it just won't show the extra text at all.  ",
//     }
// ]
function seedDB() {
    //remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("remove campgrounds");
    });
}
// add few campgrounds
// Data.forEach(function (seed) {
//     Campground.create(seed, function (err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Campground added");
//             //create a comment
//             Comment.create(
//                 {
//                     text: "there is a huge facility",
//                     author: "mahi"
//                 }, function (err, comment) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         campground.comments.push(comment);
//                         campground.save();
//                         console.log("new comment craeted");
//                     }
//                 }
//             );
//         }
//     });
// });
module.exports = seedDB;