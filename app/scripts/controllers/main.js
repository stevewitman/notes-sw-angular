var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function ($scope) {
  var noteList = [
    {
      'title': 'Note One Title',
      'body': 'Here is the body for note 1.'
    },
    {
      'title': 'Note Two Title',
      'body': 'Here is the body for note 2.'

    },
    {
      'title': 'Note Three Title',
      'body': 'Here is the body for note 3.'
    }
  ];

  $scope.notes = noteList;
});
