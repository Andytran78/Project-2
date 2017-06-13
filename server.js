// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var expressValidator = require('express-validator');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models/index.js");
require("./associations")(db);

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares!
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlroutes.js")(app);
require("./routes/UserRoutes.js")(app);
require("./routes/ListingRoutes.js")(app);
require("./routes/CreateProfileUser.js")(app);
require("./routes/apiroutes.js")(app);

// Syncing our database and logging a message to the user upon success

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});