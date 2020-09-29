angular.module('esn.group.libs')
  .run(addResolver)
  .run(addAttendeeServiceProvider);

function addResolver(esnMemberResolverRegistry, groupMemberResolverService, GROUP_OBJECT_TYPE) {
  esnMemberResolverRegistry.addResolver({ objectType: GROUP_OBJECT_TYPE, resolve: groupMemberResolverService });
}

function addAttendeeServiceProvider(attendeeService, groupAttendeeProvider) {
  attendeeService.addProvider(groupAttendeeProvider);
}
