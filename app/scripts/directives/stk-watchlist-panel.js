'use strict';

/**
 * @ngdoc directive
 * @name stockDashboardApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDashboardApp')
  .directive('stkWatchlistPanel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stkWatchlistPanel directive');
      }
    };
  });
