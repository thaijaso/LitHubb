myApp.controller('UsersController', function ($scope, UserFactory) {
	$scope.getUser = function() {
		// console.log('getting user');
		StrainFactory.getUser(function (user) {
			$scope.user = user;
			console.log(user);
		});

	}
});