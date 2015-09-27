var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'us-cdbr-iron-east-03.cleardb.net',
  	user : 'bb08a4822ce4b1',
  	password : '10f0179b',
  	database: 'heroku_59370a6610ff7e4'
});
//connection.connect();

module.exports = (function() {
	return {
		show: function(req, res) {
			connection.query('SELECT * FROM strains', function(error, results, fields) {
				res.json(results);
			});
		},
		getPage: function(req, res) {
			console.log('logging the request body: ', req.body);
			connection.query('SELECT * FROM strains ORDER BY id DESC LIMIT ' + req.body.begin + ', ' + req.body.end, function(error, results, fields) {
				res.json(results);
			})
		}	
	}
})();