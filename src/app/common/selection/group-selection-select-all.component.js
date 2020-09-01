'use strict';

angular.module('linagora.esn.group')
  .component('groupSelectionSelectAll', {
    template: require('./group-selection-select-all.pug'),
    controller: 'groupSelectionSelectAllController',
    bindings: {
      items: '<'
    }
  });
