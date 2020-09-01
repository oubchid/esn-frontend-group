'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberListItem', {
    template: require('./group-member-list-item.pug'),
    bindings: {
      member: '<'
    }
  });
