angular.module( "app")
.controller("food",function($scope,$http){
  $scope.mealsInfo;
  $scope.budget = function(){
		//console.log($scope.username)
		$http({
			method:'post',
      url:'/getMealsByPrice',
     	data:	{"price": $scope.priceInfo},
		headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then( (data)=>{
      $scope.mealsInfo = data.data;
      console.log($scope.mealsInfo)

    }).catch( (error) =>{
			console.log(error)
		})
}

  // $scope.restDescribtion = function(){

  // }
  // $scope.mealsInfo;
  // console.log($scope.priceInfo)
  // function getMealsData(){
  //   return $http.get('./data.json')
  // }

  // getMealsData().then( (data)=>{
  //   $scope.mealsInfo = data.data 
  //   console.log($scope.mealsInfo)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  
  
})

