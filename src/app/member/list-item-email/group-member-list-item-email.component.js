'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberListItemEmail', {
    template: require('./group-member-list-item-email.pug'),
    bindings: {
      member: '<'
    }
  });
