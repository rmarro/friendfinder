// var fs = require("fs");
var path = require("path");

// Require friendsList for apiRoutes
var friendList = require(path.join(__dirname, "../data/friends.js"));

module.exports = function(app) {
    // Display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    })

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        console.log(newUser);
    });


};





// function addfriend() {
//     var newf = "hello";
//     friendList.push(newf);
//     fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friendList), "utf-8", function(err) {
//         if (err) throw err;
//         console.log("added!")
//     })
// };


// addfriend();
