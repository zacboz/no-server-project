angular.module('starWarsApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/home.html"
            })
            .state('planets',{
                url:'/planets',
                templateUrl: './views/planets.html',
                controller: 'planetsCtrl'
            })
            .state('species',{
                url:'/species',
                templateUrl: './views/species.html',
                controller: 'speciesCtrl'
            })
            .state('people',{
                url:'/people',
                templateUrl: './views/people.html',
                controller: 'peopleCtrl'
            })
            .state('starships',{
                url:'/starships',
                templateUrl: './views/starships.html',
                controller: 'starshipsCtrl'
            });

        $urlRouterProvider
            .otherwise('/');

});
