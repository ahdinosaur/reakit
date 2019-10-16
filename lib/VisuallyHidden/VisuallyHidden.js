'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');

var useVisuallyHidden = createHook.createHook({
  name: "VisuallyHidden",
  compose: Box.useBox,
  useProps: function useProps(_, _ref) {
    var htmlStyle = _ref.style,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["style"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      style: _rollupPluginBabelHelpers._objectSpread2({
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      }, htmlStyle)
    }, htmlProps);
  }
});
var VisuallyHidden = createComponent.createComponent({
  as: "span",
  useHook: useVisuallyHidden
});

exports.VisuallyHidden = VisuallyHidden;
exports.useVisuallyHidden = useVisuallyHidden;