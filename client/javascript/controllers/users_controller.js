myApp.controller('UsersController', function ($scope, UserFactory) {
	
	UserFactory.checkSession(function (sessionID) {
		$scope.sessionID = sessionStorage.getItem('sessionID');
		$scope.sessionName = sessionStorage.getItem('sessionName')
		console.log('sessionID set: ', $scope.sessionID);
	});

	$scope.loginUser = function(user) {
		UserFactory.loginUser(user, function(userFound) {
			$scope.sessionID = userFound[0].id;
			$scope.sessionName = userFound[0].first_name;
			// console.log('session name: ', $scope.sessionName);
		});
	}

	$scope.logout = function() {
		UserFactory.logout(function() {
			$scope.sessionID = null;
		});
	}
});