myApp.factory('UserFactory', function ($http) {
	var factory = {};
	var userid = '';
	
	factory.checkSession = function(callback) {
		factory.sessionID = sessionStorage.getItem('sessionID');
		// console.log(factory.sessionID);
		callback(factory.sessionID);
	}

	factory.loginUser = function(user, callback) {
		// console.log('at factory, user: ', user);
		$http.post('/loginUser', user).success(function (userFound) {
			userid = userFound[0].id;
			// console.log(userFound[0].id);
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

	factory.returnUser = function(callback) {
		callback(userid);
	}
	
	return factory;
});