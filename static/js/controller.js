var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams){
    $scope.data = 'aman';
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.myWelcome = response.data.basics;
    });
   });	

appControllers.controller('resumeController',function($scope,$http,$stateParams){
    $scope.resume = 'test';
    $scope.data = 'aman';
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.Exp = response.data.Experience;
        $scope.education = response.data.education;
    });
});

appControllers.controller('contactController',function($scope,$http,$stateParams){
     $scope.contact = 'contacts'
});

appControllers.controller('resourceController',function($scope,$http,$stateParams){
     $scope.resource ='resources'
});

