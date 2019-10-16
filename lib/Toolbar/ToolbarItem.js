'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
var Rover = require('../Rover/Rover.js');
var ToolbarState = require('./ToolbarState.js');

var useToolbarItem = createHook.createHook({
  name: "ToolbarItem",
  compose: Rover.useRover,
  useState: ToolbarState.useToolbarState
});
var ToolbarItem = createComponent.createComponent({
  as: "button",
  useHook: useToolbarItem
});

exports.ToolbarItem = ToolbarItem;
exports.useToolbarItem = useToolbarItem;