'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useSealedState');
require('../Rover/RoverState.js');
var Separator = require('../Separator/Separator.js');
var ToolbarState = require('./ToolbarState.js');

var useToolbarSeparator = createHook.createHook({
  name: "ToolbarSeparator",
  compose: Separator.useSeparator,
  useState: ToolbarState.useToolbarState,
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "vertical" : _ref$orientation,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      orientation: orientation === "vertical" ? "horizontal" : "vertical"
    }, options);
  }
});
var ToolbarSeparator = createComponent.createComponent({
  as: "hr",
  useHook: useToolbarSeparator
});

exports.ToolbarSeparator = ToolbarSeparator;
exports.useToolbarSeparator = useToolbarSeparator;