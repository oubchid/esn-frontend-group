'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberList', {
    template: require('./group-member-list.pug'),
    controller: 'GroupMemberListController',
    bindings: {
      group: '<'
    }
  });
