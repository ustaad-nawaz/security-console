'use-strict'
var securityConsole = angular
	.module('security-console', [
		'ngMaterial',
		'ngMessages',
		'ngRoute'
	])
	.config([
		'$routeProvider',
		function(
			$route,
			$location
		){
			$route
				.when('/Lost', {
					templateUrl: 'app/view/404.html' 
				})
				.otherwise({
					redirectTo: '/Lost' // This is supposed to be 404
				})
				.when('/Dashboard', {
					templateUrl: 'app/view/dashboard.html',
					controller: 'DashController'
				})
				.when('/guard', {
					templateUrl: 'app/view/guard.html',
					controller: 'GuardController'
				});
		}
	])
	.filter('startFrom', function() {
		return function(input, start) {
			start = +start; //parse to int
			return input.slice(start);
		}
	});