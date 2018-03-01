// var fs = require("fs");
var path = require("path");

// Require friendsList for apiRoutes
var friendList = require(path.join(__dirname, "../data/friends.js"));

module.exports = function(app) {
    // Display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    })

    // Compare newUser info to all friends, return best match
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        userScores = newUser.scores;
        var lowestDifference = 1000;
        var matchIndex = "none"
        
        // Loop through all possible friends and determine total difference between scores
        for (var i = 0; i < friendList.length; i++) {
            friendScores = friendList[i].scores;
            var differenceArray = [];
            for (var j = 0; j < friendScores.length; j++) {
                differenceArray.push(Math.abs(friendScores[j] - userScores[j]))
            };
            var differenceTotal = differenceArray.reduce(function (a, b) {
                return a + b;
            }, 0);
            // If it's lower than current best match, replace it
            if (differenceTotal < lowestDifference) {
                lowestDifference = differenceTotal;
                matchIndex = i
            };
        };

        // console.log(friendList[matchIndex]);
        // friendList.push(newUser);

        res.send(friendList[matchIndex]);
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
