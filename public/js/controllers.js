/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('MyCtrl1',  ['$scope', '$http', '$resource', function($scope, $http, $resource) {
      $scope.people = $resource('/api/people').query();
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

//angular.module('myApp.controllers', [])
//  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
//    
//    $http.get('data/people.json').success(function(data) {
//      $scope.people = data;
//    }); 
//      
//    $scope.orderProp = 'age';
//  }])
//  .controller('MyCtrl2', ['$scope', function($scope) {
//
//  }]);
