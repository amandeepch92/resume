var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams,$state){
    $scope.data = 'aman';
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.myWelcome = response.data.records;
    });
   });	

appControllers.controller('resumeController',function($scope,$http,$stateParams){
     $scope.resume ='test';
});

appControllers.controller('contactController',function($scope,$http,$stateParams){
     $scope.contact = 'contacts'
});

appControllers.controller('resourceController',function($scope,$http,$stateParams){
     $scope.resource ='resources'
});

