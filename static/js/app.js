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
     .state('resume', {
         url: '/resume',
              views: {
                '': {
                  templateUrl: 'templates/main.html'
                },
                'nav@resume': {
                  templateUrl: 'templates/assets/nav.html'
                },
                'body@resume': {
                    templateUrl: 'static/html/resume.html'
                },
                'footer@resume': {
                  templateUrl: 'templates/assets/footer.html'
                }
              }
        })
    
      .state('contact', {
          url: '/contact',
          views: {
              '': {
                  templateUrl: 'templates/main.html'
              },
              'nav@contact': {
                  templateUrl: 'templates/assets/nav.html'
              },
              'body@contact': {
                  templateUrl: 'static/html/contact.html'
              },
              'footer@contact': {
                  templateUrl: 'templates/assets/footer.html'
              }
          }
      })
      .state('resources', {
          url: '/resources',
          views: {
              '': {
                  templateUrl: 'templates/main.html'
              },
              'nav@resources': {
                  templateUrl: 'templates/assets/nav.html'
              },
              'body@resources': {
                  templateUrl: 'static/html/resource.html'
              },
              'footer@resources': {
                  templateUrl: 'templates/assets/footer.html'
              }
          }
      })
        
   $locationProvider.html5Mode(true);
  
});


