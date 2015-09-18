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
		get: function(req, res) {
			connection.query("SELECT * FROM greencommerce.vendors WHERE PrivilegeStatus = 'Active (ISSUED)'", function(error, results) {
				res.json(results);
			});
		}	
	}
})();