myApp.factory('UserFactory', function ($http) {
	var factory = {};
	
	factory.checkSession = function(callback) {
		factory.sessionID = sessionStorage.getItem('sessionID');
		// console.log(factory.sessionID);
		callback(factory.sessionID);
	}

	factory.loginUser = function(user, callback) {
		console.log('at factory, user: ', user);
		$http.post('/loginUser', user).success(function (userFound) {
			// console.log('made it back from database, userid: ', userFound[0].id);
			sessionStorage.setItem('sessionID', userFound[0].id);
			sessionStorage.setItem('sessionName', userFound[0].first_name);
			callback(userFound);
		});
	}
	
	factory.logout = function(callback) {
		sessionStorage.clear();
		callback();
	}
	
	return factory;
});