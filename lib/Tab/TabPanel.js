'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
var Hidden = require('../Hidden/Hidden.js');
require('../Rover/RoverState.js');
var __utils = require('../__utils-8078ee09.js');
var TabState = require('./TabState.js');

var useTabPanel = createHook.createHook({
  name: "TabPanel",
  compose: Hidden.useHidden,
  useState: TabState.useTabState,
  keys: ["stopId"],
  useOptions: function useOptions(options) {
    return _rollupPluginBabelHelpers._objectSpread2({
      visible: options.selectedId === options.stopId
    }, options);
  },
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "tabpanel",
      tabIndex: 0,
      id: __utils.getTabPanelId(options.stopId, options.unstable_baseId),
      "aria-labelledby": __utils.getTabId(options.stopId, options.unstable_baseId)
    }, htmlProps);
  }
});
var TabPanel = createComponent.createComponent({
  as: "div",
  useHook: useTabPanel
});

exports.TabPanel = TabPanel;
exports.useTabPanel = useTabPanel;
