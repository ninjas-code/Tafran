angular.module('app', [ 'ui.bootstrap', 'ngRoute' ]).config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './WelcomePage.html'
		})
		.when('/about', {
			templateUrl: './about.html'
		})
		.when('/signup', {
			templateUrl: './signup.html',
			controller: 'signup'
		})
		.when('/food', {
			templateUrl: './food.html',
			controller: 'food'
		})
		.when('/signin', {
			templateUrl: './signin.html',
			controller: 'signin'
		})
		.when('/ThankYouPage', {
			templateUrl: './ThankYouPage.html'
		});
});
