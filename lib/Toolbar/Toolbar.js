'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
require('../Rover/RoverState.js');
var ToolbarState = require('./ToolbarState.js');

var useToolbar = createHook.createHook({
  name: "Toolbar",
  compose: Box.useBox,
  useState: ToolbarState.useToolbarState,
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "toolbar",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var Toolbar = createComponent.createComponent({
  as: "div",
  useHook: useToolbar,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "Toolbar", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/toolbar") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.Toolbar = Toolbar;
exports.useToolbar = useToolbar;