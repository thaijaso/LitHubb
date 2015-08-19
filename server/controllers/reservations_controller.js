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

		retrieve: function(req, res) {
			console.log(req.body.id);
			connection.query("SELECT * FROM reservations WHERE reservations.user_id = " + "'" + req.body.id + "'", function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(reservations);
				}
			});
		}	

	//write next method here
	}
})();