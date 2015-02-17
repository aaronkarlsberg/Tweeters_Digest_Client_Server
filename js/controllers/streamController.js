angular.module('app').controller('streamController', ["$http", 'TweetFactory', 'tweets', '$rootScope', function($http, TweetFactory, tweets, $rootScope) {
  var vm = this;
  // vm.getTweets = function(){
  //   console.log('inside the getTweets function')
  //   TweetFactory.fetchTweets().then(function(data){
  //     console.log('DATA',data)
  //     vm.tweets = data;
  //     console.log('TWEETS', vm.tweets);
  //   }, function (error) {
  //     console.log(error);
  //   })
  // // vm.tweets = TweetFactory.fetchTweets();
  // // console.log(vm.tweets);
  // }
  console.log("CURRENT_USER", $rootScope.current_user)
  console.log('TWEETS INSIDE CONTROLLER',tweets);
  vm.tweets = tweets;
}])

.factory('TweetFactory', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
  function fetchTweets () {
    var d = $q.defer();
    var url = "http://localhost:3000/users/" + $rootScope.current_user.id + "/tweets"
    console.log('The url is:', url)
    $http.get(url)
    .success(function(response){
      d.resolve(response);
    }).error(function (error) {
      d.reject(error)
    });
    return d.promise;
  };

  return {
    fetchTweets: fetchTweets
  }
}]);








// angular.module('app').controller('streamController', function($scope, $auth, $http) {
//   var something = function(){
//     return $http.get("http://localhost:3000/getTweets")
//     .then(function(response){
//       return response.data
//       console.log(response)
//     });
//   }

//   $scope.getTweets = function(){
//     something().then(function(data){
//       $scope.tweets = data
//     })
//   }
// });