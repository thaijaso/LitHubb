var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'localhost',
  	user : 'root',
  	password : 'root',
  	database : 'greencommerce'
});

connection.connect();

module.exports = (function() {
	return {
		show: function(req, res) {
			connection.query('SELECT * FROM products', function(error, results, fields) {
				res.json(results);
			});
		}	
	}
})();