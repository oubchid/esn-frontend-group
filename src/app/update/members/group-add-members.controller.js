'use strict';

require('../../app.constants.js');
require('../../common/group.service.js');

angular.module('linagora.esn.group')
  .controller('GroupAddMembersController', GroupAddMembersController);

function GroupAddMembersController(groupService, group, GROUP_OBJECT_TYPE) {
  var self = this;

  self.group = group;
  self.addMembers = addMembers;

  function addMembers() {
    var members = [];

    self.newMembers.forEach(function(member) {
      if (member.objectType === 'user') {
        return members.push({
          id: member.id,
          objectType: 'user'
        });
      }

      if (member.objectType === GROUP_OBJECT_TYPE) {
        return members.push({
          id: member.id,
          objectType: GROUP_OBJECT_TYPE
        });
      }

      members.push({
        id: member.email,
        objectType: 'email'
      });
    });

    return groupService.addMembers(self.group, members);
  }
}
