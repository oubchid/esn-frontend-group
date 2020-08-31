'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberAutoComplete', {
    template: require('./group-member-auto-complete.pug'),
    controller: 'GroupMemberAutoCompleteController',
    bindings: {
      newMembers: '=',
      group: '<',
      autofocus: '<'
    }
  });
