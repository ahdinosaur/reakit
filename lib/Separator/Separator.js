'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');

var useSeparator = createHook.createHook({
  name: "Separator",
  compose: Box.useBox,
  keys: ["orientation"],
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      orientation: orientation
    }, options);
  },
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "separator",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var Separator = createComponent.createComponent({
  as: "hr",
  useHook: useSeparator
});

exports.Separator = Separator;
exports.useSeparator = useSeparator;