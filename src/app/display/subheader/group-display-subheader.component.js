'use strict';

angular.module('linagora.esn.group')

  .component('groupDisplaySubheader', {
    template: require('./group-display-subheader.pug'),
    bindings: {
      group: '<',
      onDeleteBtnClick: '&'
    }
  });
