myApp.factory('MapFactory', function ($http) {
	var factory = {};

	factory.showVendor = function() {
		console.log('here');
	},
	factory.getCoords = function(callback) {
		$http.get('/dispensaries').then(function (dispensaries) {
			console.log('got them', dispensaries);
			callback(dispensaries);
		})
	}
	return factory;
});