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
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlStyle = _ref.style,
        htmlWrap = _ref.unstable_wrap,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "style", "unstable_wrap"]);

    var wrap = React.useCallback(function (children) {
      return React.createElement(Portal.Portal, null, children);
    }, []);
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
