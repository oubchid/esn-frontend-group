'use strict';

angular.module('linagora.esn.group')
  .component('groupMemberListSelectionHeader', {
    template: require('./group-member-list-selection-header.pug'),
    controller: 'groupMemberListSelectionHeaderController',
    bindings: {
      group: '<',
      members: '<',
      total: '<'
    }
  });
