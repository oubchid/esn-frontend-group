'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberListItemUser', {
    template: require('./group-member-list-item-user.pug'),
    bindings: {
      member: '<'
    }
  });
