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
		.when('/vendor', {
			templateUrl: 'partials/vendor.html'
		})

	uiGmapGoogleMapApiProvider.configure({
		v: '3.17',
		libraries: 'weather, geometry, visualization'
	});

});