var strains = require('./../server/controllers/strains_controller');
var users = require('./../server/controllers/users_controller');
var reservations = require('./../server/controllers/reservations_controller');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getStrains', function(req, res) {
		strains.show(req, res);
	});

	app.post('/loginUser', function(req, res) {
		users.find(req, res);
	});
	app.post('/addUser', function(req, res) {
		users.add(req, res);
	});
	app.post('/getReservations', function(req, res) {
		reservations.retrieve(req, res);
	});
}