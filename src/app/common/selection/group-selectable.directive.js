'use strict';

require('./group-selection.service.js');

angular.module('linagora.esn.group')
  .directive('groupSelectable', groupSelectable);

function groupSelectable(groupSelectionService) {
  return {
    restrict: 'E',
    transclude: true,
    template: require('./group-selectable.pug'),
    link: function(scope) {
      scope.toggle = function() {
        groupSelectionService.toggleItemSelection(scope.item);
      };
    },
    scope: {
      item: '='
    }
  };
}
