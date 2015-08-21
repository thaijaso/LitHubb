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
			connection.query("DELETE FROM reservations WHERE reservations.id = " + "'" + req.body.id + "'",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		},

		add: function(req, res) {
			var post = {user_id: req.body.user_id, vendor_id: req.body.vendor_id, quantity_gram: req.body.quantity_gram, quantity_eigth: req.body.quantity_eigth, quantity_quarter: req.body.quantity_quarter, quantity_half: req.body.quantity_half, quantity_oz: req.body.quantity_oz, created_at: req.body.created_at, updated_at: req.body.created_at, status: 0};
			connection.query("INSERT INTO reservations SET ?", post, function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		},

		getAll: function(req, res) {
			connection.query("SELECT * FROM users", function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					console.log(reservations);
					res.json(reservations);
				}
			});
		},

	//write next method here
	}
})();