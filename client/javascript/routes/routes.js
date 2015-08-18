var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
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
});