angular.module('myApp', ['tes']);

angular.module('tes', ['ngRoute', 'ngResource']);

angular.module('tes').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/tes/tes1/tes1.html',
        controller: 'studentController'
      });

  }]);

