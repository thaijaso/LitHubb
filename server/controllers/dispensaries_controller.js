var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'aa6j9v09e0eau2.crmnsirkdajw.us-west-2.rds.amazonaws.com',
  	user : 'root',
  	password : 'greencommerce',
  	port : '3306'
});

connection.connect();

module.exports = (function() {
	return {
		get: function(req, res) {
			const lngDistancePerDegreeAtEquator = 69.172;
			const latDistancePerDegreeAtEquator = 69.08558338297732;

			var maxRadius;
			var fromLat;
			var fromLng;
			var sqlQuery;

			if (typeof req.query.radius != "undefined"){
				maxRadius = req.query.radius;
			} else {
				maxRadius = 5;
			}
			if (typeof req.query.lat != "undefined")
			{
				if (typeof req.query.lng != "undefined")
				{
					fromLat = req.query.lat;
					fromLng = req.query.lng;
					sqlQuery = 'SELECT *, ' +
						'( 3959 * acos( cos( ' +
							'radians(' + fromLat + ' ) ) * ' +
							'cos( radians( vendors.lat ) ) * ' +
							'cos( radians(vendors.lng) - ' +
							'radians(' + fromLng + ')) + ' +
							'sin(radians(' + fromLat + ')) * ' +
							'sin( radians(vendors.lat)))) AS distance ' +
						'FROM vendors ' +
						'WHERE TRIM(PrivilegeStatus) = "ACTIVE (ISSUED)" ' +
						'HAVING distance < ' + maxRadius + ' ' +
						'ORDER BY distance';
				} else {
					error += "Must supply both longitude & latitude in the form lithubb.com/dispensaries?lat=47.609812&lng=-122.196568";
				}
			} else if (typeof req.query.lng != "undefined")
			{
				error += "Must supply both longitude & latitude in the form lithubb.com/dispensaries?lat=47.609812&lng=-122.196568";
			} else {
				sqlQuery = 'SELECT * FROM vendors WHERE TRIM(PrivilegeStatus) = "ACTIVE (ISSUED)"';
			}
			connection.query(sqlQuery, function(error, results) {

				res.json(results);
			});
		}
	}
})();