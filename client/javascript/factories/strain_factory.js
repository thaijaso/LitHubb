myApp.factory('StrainFactory', function ($http) {
	var factory = {};
	var strains = [];

	factory.getStrains = function() {
		$http.get('/getStrains').success(function (strains) {
			console.log(strains);
		});
	}

	
	
	return factory;
});