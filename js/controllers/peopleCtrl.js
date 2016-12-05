angular.module('starWarsApp').controller('peopleCtrl', function($scope, mainService, $stateParams){

  // mainService.getPeople().then(function(response) {
  //     $scope.people = response.results;
  //   });

    $scope.getPeople = function(url){
      mainService.getPeople(url).then(function(response) {
        $scope.people = response.results;
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

    $scope.getPeople();



});
