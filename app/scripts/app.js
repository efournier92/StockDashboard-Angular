'use strict';

/**
 * @ngdoc overview
 * @name stockDashboardApp
 * @description
 * # stockDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('stockDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
  });
