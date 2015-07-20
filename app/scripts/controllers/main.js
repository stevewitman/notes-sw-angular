var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function ($scope, $http) {
  var url = 'https://notes-api-sw.herokuapp.com/notes'
  $http.get(url).success(function(data, status, headers, config) {
    console.debug(data);
    $scope.notes = data;
  }).error(function(data, status, headers, config) {
    console.error(data, status, headers, config);
    if(status === 404) {
      window.alert('404 - Not Found')
    } else {
      window.alert('unknown error')
    }
  });

  $scope.addNote = function() {
    $scope.notes.push(angular.copy($scope.note));
  };

});
