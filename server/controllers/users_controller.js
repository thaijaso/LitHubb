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
		find: function(req, res) {
			// ad hoc solution for empty longin attempts from iOS devices. DELETE THIS IF/ELSE STATEMENT ONCE VALIDATION IS WORKING
			if (req.body.email == '') {
				req.body.email == 'invalidemail298'
				req.body.password == '239875098324750'
			}

			connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'" + " AND users.password = " + "'" + req.body.password + "'", function(error, user, fields) {
				if (error) {
					console.log(error);
					res.json(error);
				} else {
					// this is for iOS users
					if (typeof user[0] !== 'undefined' ) {
						console.log(typeof user)
						console.log('valid login!!')
						req.session.database_id = user[0].id
						req.session.email = user[0].email
						res.json(user)
					} else {
						// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
						res.json("error");
						}
				}
			});
		},	

// INSERT INTO users (first_name, last_name, email, password, created_at, updated_at)
// VALUES ('Kris', 'Ekenes', 'kris@ekenes', 'password', '2008-11-11 13:23:44', '2008-11-11 13:23:44'); 

		add: function(req, res) { 
			// console.log(req.body.created_at);
			var post = {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, created_at: Date.now(), updated_at: Date.now(), phone: req.body.phone};
			console.log(post);
			connection.query("INSERT INTO users SET ?", post, function(error, results) {
				if (error) {
					console.log(error);
				} else {
					res.json(results);
				}
			});
		}	
	}
})();