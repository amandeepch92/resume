var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams){
   // $scope.data = 'aman';
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.myWelcome = response.data.basics;
    });
   });	

appControllers.controller('resumeController',function($scope,$http,$stateParams){
   // $scope.resume = 'test';
   // $scope.data = 'aman';
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.Exp = response.data.Experience;
        $scope.education = response.data.education;
        $scope.project1 = response.data.Project1;
        $scope.project2 = response.data.Project2;
    });
});

appControllers.controller('contactController',function($scope,$http,$stateParams){
     $scope.contact = 'contacts'
});

appControllers.controller('resourceController',function($scope,$http,$stateParams){
     $scope.resource ='resources'
});

