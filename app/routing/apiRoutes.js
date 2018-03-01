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
        userScores = newUser.scores;
        // loop through all objects in friendList
        // access the scores key of the object
        friendScores = friendList[0].scores;
        // compare each score in that array to the newUser scores array and
        //add up total of absolute value of differences
        var differenceArray = [];
        for (var i = 0; i < friendScores.length; i++) {
            differenceArray.push(Math.abs(friendScores[i] - userScores[i]))
        };
        var differenceTotal = differenceArray.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log("Difference Score: " + differenceTotal);

        friendList.push(newUser);
        res.send("New user added");
    });


};


//--------------------------------------
// trying to save all data to friends.js instead of array here-- does that matter??

// function addfriend() {
//     var newf = "hello";
//     friendList.push(newf);
//     fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friendList), "utf-8", function(err) {
//         if (err) throw err;
//         console.log("added!")
//     })
// };

// addfriend();
