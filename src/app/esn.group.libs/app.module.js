angular.module('esn.group.libs', ['restangular', 'esn.http', 'esn.member', 'esn.attendee']);

require('esn-frontend-common-libs/src/frontend/js/modules/http');
require('esn-frontend-common-libs/src/frontend/js/modules/member');
require('esn-frontend-common-libs/src/frontend/js/modules/attendee/attendee.module');

require('./app.constants');
require('./restangular/restangular.service');
require('./api-client/api-client.service');
require('./attendee-provider/attendee-provider.service');
require('./member-resolver/group-member-resolver.service');
require('./app.run');
