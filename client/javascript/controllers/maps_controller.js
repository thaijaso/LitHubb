myApp.controller('MapsController', function ($scope, MapFactory) {
	$scope.map = { 
		center: { latitude: 47.605628, longitude: -122.253799 }, 
		zoom: 12 
	};

	$scope.markers = [{
		id: 1, 
		coords: {latitude:47.609811, longitude: -122.198494 }, 
		icon: './../assets/icons/marker.png'}
	];

});