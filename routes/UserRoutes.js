var db = require("../models");

module.exports = function(app) {
//All listings and users
  app.get("/api/users", function(req, res) {
  	db.User.findAll({
  		include: [db.Listing]}).then(function(booksDb) {
  			res.json(booksDb);
  		});
  	});
//All listings for a specified user
  app.get("/api/user/:id", function(req, res) {
  	db.User.findOne({
  		include: [db.Listing],
  		where: {
  			id: req.params.id
  		}
  	}).then(function(booksDb) {
  		res.json(booksDb)
  		});
  	});
//Create listing for a user
	app.post("/api/users", function(req, res) {
		db.User.create(req.body).then(function(booksDb) {
			res.json(booksDb);
		});
	});

app.delete("/api/users/:id", function(req,res) {
	db.User.destroy({
		where: {
			id: req.params.id
		}
		});
	});
 }