'use strict';

angular.module('linagora.esn.group')
  .component('groupListSearch', {
    template: require('./group-list-search.pug'),
    controller: 'GroupListSearchController',
    bindings: {
      onQuery: '&'
    }
  });
