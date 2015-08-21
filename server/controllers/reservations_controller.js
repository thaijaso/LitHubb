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
			connection.query("SELECT users.first_name, users.last_name, vendors.name as vendor, vendors_has_strains.price_gram, reservations.quantity_gram, reservations.quantity_eigth, reservations.quantity_quarter, reservations.quantity_half, reservations.quantity_oz, strains.name, strains.category, reservations.status, reservations.id FROM users JOIN reservations ON reservations.user_id = users.id JOIN vendors ON vendors.id = reservations.vendor_id JOIN vendors_has_strains ON vendors_has_strains.vendor_id = vendors.id JOIN strains ON strains.id = vendors_has_strains.strain_id WHERE reservations.user_id = " + "'" + req.body.id + "'" + "GROUP BY reservations.id;",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(reservations);
				}
			});
		},

		cancel: function(req, res) {
			// console.log(req.body);
			connection.query("DELETE FROM reservations WHERE reservations.id = " + "'" + req.body.id + "'",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		}	

	//write next method here
	}
})();