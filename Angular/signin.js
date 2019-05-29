angular.module( "app")


.controller("signin",function($scope,$http,$location,$rootScope){
	 
	
  $scope.login=function(){
		//console.log($scope.username)
		$http({
			method:'post',
			url:'/login',
			data:JSON.stringify({
				UserName:$scope.username,
				Password:$scope.password
			}),
		headers: {'Content-Type': "application/json; charset = utf-8"}
		}).then( (data)=>{
			console.log(data)
			if(data.data.length !== 0){
				$location.path('/'); 
			}else{
				$scope.errorMessage = "username or passowrd is incorrect"
			}
			
    }).catch(function(error){
			console.log(error)
		})
}


    })