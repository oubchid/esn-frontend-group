'use strict';

angular.module('linagora.esn.group')

  .component('groupMemberValidateMessage', {
    template: require('./group-member-validate-message.pug'),
    bindings: {
      error: '<'
    }
  });
