(function () {
  "use strict";

  angular.module('interests', [
    'ngRoute',
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/addInterest', {
      templateUrl: 'assets/interests/views/addInterest.html',
      controller: 'BucketController as bucketCtrl'
    })

    .when('/editItem/:itemId', {
      templateUrl: 'assets/interests/views/editItem.html',
      controller: 'BucketController as bucketCtrl'
    })

    .when('/bucketlistitem', {
       templateUrl: 'assets/interests/views/bucketlistItem.html',
       controller: 'BucketController as bucketCtrl'
    })

    .when('/addInterest', {
       templateUrl: 'assets/interests/views/addInterest.html',
       controller: 'BucketController as bucketCtrl'
    })

    .when('/bucket_list_items/:bucketId', {
       templateUrl: 'assets/interests/views/bucketDetail.html',
       controller: 'BucketController as bucketCtrl',
   })

   .when('/users/:userId', {
      templateUrl: 'assets/interests/views/userBucket.html',
      controller: 'UserController as user',
  });
}])

})();
