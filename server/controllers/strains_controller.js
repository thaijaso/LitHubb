var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'greencommerce.crmnsirkdajw.us-west-2.rds.amazonaws.com',
  	user : 'root',
  	password : 'greencommerce',
  	port : '3306'
});
connection.connect();

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