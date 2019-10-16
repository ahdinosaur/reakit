'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');

var useGroup = createHook.createHook({
  name: "Group",
  compose: Box.useBox,
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "group"
    }, htmlProps);
  }
});
var Group = createComponent.createComponent({
  as: "div",
  useHook: useGroup
});

exports.Group = Group;
exports.useGroup = useGroup;