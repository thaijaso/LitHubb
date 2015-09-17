var strains = require('./../server/controllers/strains_controller');
var users = require('./../server/controllers/users_controller');
var reservations = require('./../server/controllers/reservations_controller');
var vendors = require('./../server/controllers/vendors_controller');
var dispensaries = require('./../server/controllers/dispensaries_controller');

// var session = require('express-session');

var backend = require('./../server/controllers/backend_controller');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getStrains', function(req, res) {
		strains.show(req, res);
	});

	app.post('/loginUser', function(req, res) {
		users.find(req, res);
		// session is for iOS users, though it shouldn't cause a problem for web users
	});
	// This is a logout function for iOS users who must use express session
	app.post('/logoutUser', function(req, res){
		req.session.destroy()
	})
	// This is a function to check which user is logged in. For now this is only used for iOS.
	app.get('/currentUser', function(req, res) {

		console.log("heeeere in get user")
		var jsonObject = {
			email: req.session.email,
			id: req.session.database_id
		}
		console.log(jsonObject.id);
		res.json(jsonObject);
	})
	
	app.post('/addUser', function(req, res) {
		console.log(req.body)
		users.add(req, res);
	});

	app.post('/getReservations', function(req, res) {
		console.log(req.body, "love")
		reservations.retrieve(req, res);
	});

	app.get('/getAllReservations', function(req, res) {
		reservations.getAll(req, res);
	});

	app.get('/getMenu/:id', function(req, res) {
		vendors.getMenu(req, res);
	});

	app.get('/dispensaries', function(req, res) {
		dispensaries.get(req, res);
	});

	app.get('/strains/next', function(req, res) {
		strains.getPage(req, res);
	});

	app.post('/cancelOrder', function(req, res) {
		reservations.cancel(req, res);
	});

	app.post('/addOrder', function(req, res) {
		reservations.add(req, res);
	});

	app.get('/getItem/:vendorID/:strainID', function(req, res) {
		reservations.getItem(req, res);
	});

	app.post('/available', function(req, res) {
		reservations.available(req, res);
	});

	app.post('/unavailable', function(req, res) {
		reservations.unavailable(req, res);
	});
		app.get('/dispensaries', function(req, res) {
		dispensaries.get(req, res);
	});
	app.get('/backend', function(req, res) {
		backend.get(req, res);
	});
}