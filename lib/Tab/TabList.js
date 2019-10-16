'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
require('../Rover/RoverState.js');
var TabState = require('./TabState.js');

var useTabList = createHook.createHook({
  name: "TabList",
  compose: Box.useBox,
  useState: TabState.useTabState,
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "tablist",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var TabList = createComponent.createComponent({
  as: "div",
  useHook: useTabList,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "TabList", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/tab") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.TabList = TabList;
exports.useTabList = useTabList;