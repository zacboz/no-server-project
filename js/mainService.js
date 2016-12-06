angular.module('starWarsApp').service('mainService', function($http){

    this.getPlanet = function(passedurl) {
      if(passedurl === undefined){
        var newurl = 'https://swapi.co/api/planets/';
      } else {
        var newurl = [passedurl.slice(0, 4) + 's' + passedurl.slice(4)].join('');
      }
      return $http({
        method: 'GET',
        url: newurl,
      }).then(function(response){
        console.log(response);
          var planets = response.data.results;
          for (var i = 0; i < planets.length; i++){
            planets[i].residentNames = [];
            (function(i){
              for (var j = 0; j < planets[i].residents.length; j++){
                (function(j){
                  getFamousPeople(planets[i].residents[j]).then(function(response){
                     planets[i].residentNames.push(response.name);
                  });
                })(j);
              }
            })(i);
          }
          return response.data;
        })
      }

    var getHomeworld = function(url) {
      return $http({
        method: 'GET',
        url: url,
      }).then(function(response){
          return response.data;
      })
    }

    this.getSpecies = function(passedurl) {
      if(passedurl === undefined){
        var newurl = 'https://swapi.co/api/species/';
      } else {
        var newurl = [passedurl.slice(0, 4) + 's' + passedurl.slice(4)].join('');
      }
      return $http({
        method: 'GET',
        url: newurl,
      }).then(function(response){
        var species = response.data.results;
        for(var i = 0; i < species.length; i++){
          species[i].homeworldName = '';
          species[i].peopleNames = [];
          (function(i){
            getHomeworld(species[i].homeworld).then(function(response){
               species[i].homeworldName = response.name;
            });
          })(i);
          (function(i){
            for (var j = 0; j < species[i].people.length; j++){
              (function(j){
                getFamousPeople(species[i].people[j]).then(function(response){
                   species[i].peopleNames.push(response.name);
                });
              })(j);
            }
          })(i)
        }
          return response.data;
      })
    }

    var getSpecie = function(url) {
      return $http({
        method: 'GET',
        url: url,
      }).then(function(response){
          return response.data;
      })
    }



    this.getPeople = function(passedurl) {
      if(passedurl === undefined){
        var newurl = 'https://swapi.co/api/people/';
      } else {
        var newurl = [passedurl.slice(0, 4) + 's' + passedurl.slice(4)].join('');
      }
      return $http({
        method: 'GET',
        url: newurl,
      }).then(function(response){
        var people = response.data.results;
          for (var i = 0; i < people.length; i++){
            people[i].homeworldName = '';
            people[i].specieName = '';
            people[i].starshipNames = [];
            (function(i){
              getHomeworld(people[i].homeworld).then(function(response){
                 people[i].homeworldName = response.name;
              });
            })(i);
            (function(i){
              getSpecie(people[i].species).then(function(response){
                 people[i].specieName = response.name;
              });
            })(i);
            (function(i){
              for (var j = 0; j < people[i].starships.length; j++){
                (function(j){
                  getStarship(people[i].starships[j]).then(function(response){
                     people[i].starshipNames.push(response.name);
                  });
                })(j);
              }
            })(i)
          }
          return response.data;
      })
    }

    var getFamousPeople = function(url) {
      return $http({
        method: 'GET',
        url: url,
      }).then(function(response){
          return response.data;
      })
    }


    this.getStarships = function(passedurl) {
      if(passedurl === undefined){
        var newurl = 'https://swapi.co/api/starships/';
      } else {
        var newurl = [passedurl.slice(0, 4) + 's' + passedurl.slice(4)].join('');
      }
      return $http({
        method: 'GET',
        url: newurl,
      }).then(function(response){
          return response.data;
      })
    }

    var getStarship = function(url) {
      return $http({
        method: 'GET',
        url: url,
      }).then(function(response){
          return response.data;
      })
    }


});
