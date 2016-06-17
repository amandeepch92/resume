var app = angular.module('resume', ['ui.router','appControllers']);

/***State Routing Start***/  
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'home': { templateUrl: 'index.html', controller: 'MyController' },
                'header@home': { templateUrl: 'partials/header.html' },
                'body@home': { templateUrl: 'partials/body.html' },
                'footer@home': { templateUrl: 'partials/footer.html' }
            }
        })
    .state('home.Aboutme', {
        parent: 'home',
        url: 'About Me',
        views: {
            'body@home': { templateUrl: 'static/html/Aboutme.html' },    
      }
    })
     .state('home.Resume', {
         parent: 'home',
         url: 'Resume',
         views: {
             'body@home': { templateUrl: 'static/html/resume.html' },
         }
     })
    .state('home.Contact', {
        parent: 'home',
        url: 'Contact',
        views: {
            'body@home': { templateUrl: 'static/html/contact.html' },
        }
    })
    .state('home.Resources', {
        parent: 'home',
        url: 'Resources',
        views: {
            'body@home': { templateUrl: 'static/html/resource.html' },
        }
    })
    ;
        
   $locationProvider.html5Mode(true);
  
});


