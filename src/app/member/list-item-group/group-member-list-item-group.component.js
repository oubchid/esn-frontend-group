'use strict';

angular.module('linagora.esn.group')
  .component('groupMemberListItemGroup', {
    template: require('./group-member-list-item-group.pug'),
    bindings: {
      member: '<'
    }
  });
