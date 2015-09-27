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
		getMenu: function(req, res) {
			connection.query("SELECT officialvendors.name, vendors_has_strains.strain_id, vendors_has_strains.vendor_id, price_gram, price_eigth, price_quarter, price_half, price_oz, strains.name as strain_name, category, symbol, description, star_image, thumb_img1, thumb_img2, thumb_img3, thumb_img4, fullsize_img1, fullsize_img2, fullsize_img3, fullsize_img4, test_graph, effects1, effects2, effects3, effects4, effects5, medical1, medical2, medical3, medical4, medical5, negatives1, negatives2, negatives3, negatives4, negatives5, grow_difficulty FROM officialvendors " + 
							"JOIN vendors_has_strains ON officialvendors.id = vendors_has_strains.vendor_id " + 
							"JOIN strains ON strains.id = vendors_has_strains.strain_id " + 
							"WHERE officialvendors.id = " + req.params.id, function(error, menu, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(menu);
				}
			});
		}
	}
})();