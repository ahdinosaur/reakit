'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
var usePipe = require('reakit-utils/usePipe');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
var Hidden = require('../Hidden/Hidden.js');
require('react-dom');
var Portal = require('../Portal/Portal.js');
require('../Dialog/DialogState.js');
require('popper.js');
require('../Popover/PopoverState.js');
var TooltipState = require('./TooltipState.js');

var useTooltip = createHook.createHook({
  name: "Tooltip",
  compose: Hidden.useHidden,
  useState: TooltipState.useTooltipState,
  keys: ["unstable_portal"],
  useOptions: function useOptions(_ref) {
    var _ref$unstable_portal = _ref.unstable_portal,
        unstable_portal = _ref$unstable_portal === void 0 ? true : _ref$unstable_portal,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["unstable_portal"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      unstable_portal: unstable_portal
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlStyle = _ref2.style,
        htmlWrap = _ref2.unstable_wrap,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["ref", "style", "unstable_wrap"]);

    var wrap = React.useCallback(function (children) {
      if (options.unstable_portal) {
        return React.createElement(Portal.Portal, null, children);
      }

      return children;
    }, [options.unstable_portal]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(options.unstable_popoverRef, htmlRef),
      role: "tooltip",
      style: _rollupPluginBabelHelpers._objectSpread2({}, options.unstable_popoverStyles, {
        pointerEvents: "none"
      }, htmlStyle),
      unstable_wrap: usePipe.usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var Tooltip = createComponent.createComponent({
  as: "div",
  useHook: useTooltip
});

exports.Tooltip = Tooltip;
exports.useTooltip = useTooltip;
