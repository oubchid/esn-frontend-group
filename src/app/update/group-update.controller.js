'use strict';

require('../common/group.service.js');

angular.module('linagora.esn.group')
  .controller('GroupUpdateController', GroupUpdateController);

function GroupUpdateController(groupService, group) {
  var self = this;

  self.group = group;
  self.update = update;

  function update() {
    return groupService.update(self.group);
  }
}
