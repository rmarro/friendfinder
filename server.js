var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes.js"));
var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes.js"));

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});