var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.


//sets main.handlebars as the default layout and our view engine as handlebar
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//need to be able to view something on html so I know something is working
//so this allows us to view the main and the burger-block
//this view works, no errors
app.get("/", function(req, res){
	res.render('partials/burgers/burger-block');
})
// Import routes and give the server access to them.
//var routes = require("./controllers/burgersController.js");

//+++++++++++++++++++++++something about this line that it does not like
//app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});