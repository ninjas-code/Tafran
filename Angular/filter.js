// angular.module('app')
//   .filter('filterData', function(){
//     return function(resturentList , priceInfo){
      
//       var max = priceInfo;
//       console.log(max)
//       var choosedPrice = [];

//       angular.forEach(resturentList, function(resturent){
//         console.log(resturent)
//         if(resturent.price <= max){
//           choosedPrice.push(resturent)
//         }
//       })
//       console.log(choosedPrice)
//       return choosedPrice;
//     }
//   })