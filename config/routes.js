var strains = require('./../server/controllers/strains_controller');
// var users = require('./../server/controllers/users_controller');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getStrains', function(req, res) {
		strains.show(req, res);
	});

	app.get('/getUser', function(req, res) {
		// console.log('here');
		req.session.user = 'Jason';
		res.json(req.session.user);
	});
}