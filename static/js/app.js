var app = angular.module('resume', ['ui.router','appControllers']);

/***State Routing Start***/  
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    
    $stateProvider
        .state('home', {
              url: '/',
              views: {
                '': {
                  templateUrl: 'templates/main.html'
                },
                'nav@home': {
                  templateUrl: 'templates/assets/nav.html'
                },
                'body@home': {
                  templateUrl: 'templates/body.html'
                },
                'footer@home': {
                  templateUrl: 'templates/assets/footer.html'
                }
              }
        })
        .state('aboutme', {
            url: '/aboutme',
              views: {
                '': {
                  templateUrl: 'templates/main.html'
                },
                'nav@aboutme': {
                  templateUrl: 'templates/assets/nav.html'
                },
                'body@aboutme': {
                  templateUrl: 'templates/body.html'
                },
                'footer@aboutme': {
                  templateUrl: 'templates/assets/footer.html'
                }
              }
        })
    
        
   $locationProvider.html5Mode(true);
  
});


