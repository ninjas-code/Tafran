angular.module('app').controller('food', function($scope, $http, $location, $rootScope) {
	$scope.search = function() {
		$scope.meals;
		$http({
			method: 'post',
			url: '/getMealsByPrice',
			data: JSON.stringify({
				price: $scope.input
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(function(response) {
				console.log(response.data);
				$scope.meals = response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	};
});
