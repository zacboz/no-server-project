angular.module('starWarsApp').controller('speciesCtrl', function($scope, mainService, $stateParams){

  $scope.getSpecies = function(url){
    mainService.getSpecies(url).then(function(response) {
      $scope.species = response.results;
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

  $scope.getSpecies();



});

// {{specie.average_height / 2.54 / 12 | number: 0}} ft {{specie.average_height / 2.54 % 12}}
