myApp.controller('VendorsController', function ($scope, VendorFactory, ReservationFactory, $location, $routeParams) {
	// console.log($routeParams.id);

	ReservationFactory.getAllReservations(function(allReservations){
			$scope.reservations  = allReservations;
		});

});