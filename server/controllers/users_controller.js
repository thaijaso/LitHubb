var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'greencommerce.crmnsirkdajw.us-west-2.rds.amazonaws.com',
  	user : 'root',
  	password : 'greencommerce',
  	port : '8888'
});

connection.connect();

module.exports = (function() {
	return {
		find: function(req, res) {
			// ad hoc solution for empty longin attempts from iOS devices. DELETE THIS IF/ELSE STATEMENT ONCE VALIDATION IS WORKING
			

			connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'" + " AND users.password = " + "'" + req.body.password + "'", function(error, user, fields) {
				if (error) {
					console.log(error);
					res.json(error);
				} else {
					// this is for iOS users
					if (typeof user[0] !== 'undefined' ) {
						console.log(typeof user)
						console.log('valid login!!', user)
						req.session.email = user[0].email;
						req.session.user_id = user[0].id;
						console.log('this is the session stuff:', req.session)
						res.json(user)
					} else {
						// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
						res.json("error");
						}
				}
			});
		},

		findOne: function(req, res) {
			// ad hoc solution for empty longin attempts from iOS devices. DELETE THIS IF/ELSE STATEMENT ONCE VALIDATION IS WORKING

			connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'", function(error, user, fields) {
				if (error) {
					console.log(error);
					res.json(error);
				} else {
					// this is for iOS users
					if (typeof user[0] !== 'undefined' ) {
						console.log('valid login!!')
						res.json("user exists")
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
			var check_email_post = {email: req.body.email}

			var post = {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, created_at: Date.now(), updated_at: Date.now(), phone: req.body.phone};
			console.log(post, "post");
			connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'", function(error, user, fields) {
				if (error) {
					console.log(error);
					res.json(error);
				} else {
					// this is needed for iOS users
					if (typeof user[0] == 'undefined') {
						console.log('valid login!!')
						connection.query("INSERT INTO users SET ?", post, function(error, results) {
							if (error) {
								console.log(error);
								res.json(error)
							} else {
								console.log("results", results)
								req.session.email = user.email
								res.json(results);
							}
						});
					} else {
						// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
						res.json("duplicate user");

						}
				}
			});
			
		}	
	}
})();