'use strict';

angular.module('linagora.esn.group')
  .run(addTemplateCache);

function addTemplateCache($templateCache) {
  $templateCache.put('/group/images/group-icon.svg', require('../../images/group-icon.svg'));
};
