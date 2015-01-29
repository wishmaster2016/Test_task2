'use strict';

angular.module('TreeViewApp.directives', [])
  .directive('treeView', [ function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/directives/treeview.html',
      link: function($scope, elm) {
        console.log("directive loaded");
      }
    }
  }]);
  