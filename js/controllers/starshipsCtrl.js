angular.module('starWarsApp').controller('starshipsCtrl', function($scope, mainService, $stateParams){

  // mainService.getStarships().then(function(response) {
  //     $scope.starships = response.results;
  //     console.log(response);
  //   });
  $scope.getStarships = function(url){
    mainService.getStarships(url).then(function(response) {
      $scope.starships = response.results;
      if (response.next) {
        $scope.next = response.next;
      } else {
        $scope.next = null;
      }
      if (response.previous) {
        $scope.previous = response.previous;
      } else {
        $scope.previous = null;
      }
      console.log(response);
    });
  }

  $scope.getStarships();


});
