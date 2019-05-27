angular.module( "app" ,['ngRoute'])

.config(function($routeProvider){

  $routeProvider

 .when("/",{
    templateUrl:"./WelcomePage.html",
})

 .when("/signup",{
    templateUrl:"./signup.html",
    controller : "signup"
})

.when("/signin", {
  templateUrl:"./signin.html",
  controller: "signin"
})


.when("/ThankYouPage",{
  templateUrl:"./ThankYouPage.html",
})
})


// .controller("food",function($scope,$http,$location,$rootScope){
//   console.log("hi")
  
//     })
    
//   headers: {'Content-Type': "application/json"}
//   }).then(function(response){
//           $rootScope.data = response.data[0]
//           $location.path("/profile")
          
//   }).catch(function(){
//     console.log('big error')
//   })
// }

