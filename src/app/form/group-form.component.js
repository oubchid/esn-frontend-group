'use strict';

angular.module('linagora.esn.group')

  .component('groupForm', {
    template: require('./group-form.pug'),
    bindings: {
      group: '=',
      newMembers: '=',
      updateMode: '@'
    },
    controller: 'GroupFormController'
  });
