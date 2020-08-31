'use strict';

angular.module('linagora.esn.group')

  .component('groupListItem', {
    template: require('./group-list-item.pug'),
    bindings: {
      group: '<',
      onDeleteBtnClick: '&'
    }
  });
