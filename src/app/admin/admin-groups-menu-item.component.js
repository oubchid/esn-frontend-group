'use strict';

angular.module('linagora.esn.group')
  .component('adminGroupsMenuItem', {
    template: require('./admin-groups-menu-item.pug'),
    bindings: {
      displayIn: '<'
    }
  });
