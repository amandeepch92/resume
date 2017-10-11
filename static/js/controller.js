var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams){
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.myWelcome = response.data.basics;
    });
   });	

appControllers.controller('resumeController',function($scope,$http,$stateParams){
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.Exp = response.data.Experience;
        $scope.education = response.data.education;
        $scope.project1 = response.data.Project1;
        $scope.project2 = response.data.Project2;
        $scope.project3 = response.data.Project3;
    });
});

appControllers.controller('contactController',function($scope,$http,$stateParams){
     $scope.contact = 'contacts';
    $scope.submitclicked=function () {
        alert("Button is Enabled");
       //  var url = "http://localhost:3001/api/userdata";
       //  var userdata ={
       //      'firstName': $scope.firstName,
       //      'lastName': $scope.lastName,
       //      'emailid': $scope.email,  
       //      'created_date':'21'    
       //  };
       // $http.post(url,userdata).success( function(data,status,header,config) {
       //    $scope.msg = data; 
       // }).error(function(data, status, headers, config) {
       //      alert( "failure message: " + JSON.stringify({data: data}));
       //  });

       $http({
            url: "http://localhost:3000/api/userdata",
            method: "POST",
            data: {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'emailid': $scope.email,  
            'created_date':'21'    
            },
            contentType:'application/json'//,
           // headers: {
           // 'Access-Control-Allow-Origin' : '*',
           // }
        })
        .then(function(response) {
                // success
        }, 
        function(response) { // optional
                // failed
        });
       $scope.firstName='',
       $scope.lastName='',
       $scope.email=''
    };
    $scope.reterivedata=function(){
         $http.get('http://localhost:3000/api/userdata').success( function(response) {
            $scope.reterived = response; 
        });
    }
});

appControllers.controller('resourceController',function($scope,$http,$stateParams){
     $scope.resource ='resources'
});

