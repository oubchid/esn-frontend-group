'use strict';

const _ = require('lodash');

angular.module('linagora.esn.group')
  .factory('groupSelectionService', groupSelectionService);

function groupSelectionService() {
  var selectedItems = [],
    selecting = false;

  function toggleItemSelection(item, shouldSelect) {
    var selected = angular.isDefined(shouldSelect) ? shouldSelect : !item.selected;

    if (item.selected === selected) {
      return;
    }

    item.selected = selected;

    if (selected) {
      selectedItems.push(item);
    } else {
      _.pull(selectedItems, item);
    }

    selecting = selectedItems.length > 0;
  }

  function unselectAllItems() {
    selectedItems.forEach(function(item) {
      item.selected = false;
    });

    selectedItems.length = 0;
    selecting = false;
  }

  return {
    isSelecting: function() { return selecting; },
    getSelectedItems: function() { return _.clone(selectedItems); },
    toggleItemSelection,
    unselectAllItems
  };
}
