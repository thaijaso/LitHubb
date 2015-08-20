var myApp = angular.module('myApp', ['ngRoute', 'uiGmapgoogle-maps']);

myApp.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/map.html'
		})
		.when('/strains', {
			templateUrl: 'partials/strains.html'
		})
		.when('/feed', {
			templateUrl: 'partials/feed.html'
		})
		.when('/vendor/:id', {
			templateUrl: 'partials/vendor.html'
		})
		.when('/reserve', {
			templateUrl: 'partials/reserve.html'
		})

	uiGmapGoogleMapApiProvider.configure({
		v: '3.17',
		libraries: 'weather, geometry, visualization'
	});

});