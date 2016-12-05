angular.module('starWarsApp').controller('planetsCtrl', function($scope, mainService, $stateParams){

    // mainService.getPlanet().then(function(response) {
    //   console.log(response);
    //     $scope.planets = response.results;
    // });

      $scope.getPlanet = function(url){
        mainService.getPlanet(url).then(function(response) {
          $scope.planets = response.results;
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

      $scope.getPlanet();


});
