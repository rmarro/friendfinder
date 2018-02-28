var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Require html and api routes
require(path.join(__dirname, "app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "app/routing/apiRoutes.js"))(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});