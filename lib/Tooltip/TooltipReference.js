'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('../Dialog/DialogState.js');
require('popper.js');
require('../Popover/PopoverState.js');
var TooltipState = require('./TooltipState.js');

var useTooltipReference = createHook.createHook({
  name: "TooltipReference",
  compose: Box.useBox,
  useState: TooltipState.useTooltipState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlur = _ref.onBlur,
        htmlOnMouseEnter = _ref.onMouseEnter,
        htmlOnMouseLeave = _ref.onMouseLeave,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(options.unstable_referenceRef, htmlRef),
      tabIndex: 0,
      onFocus: useAllCallbacks.useAllCallbacks(options.show, htmlOnFocus),
      onBlur: useAllCallbacks.useAllCallbacks(options.hide, htmlOnBlur),
      onMouseEnter: useAllCallbacks.useAllCallbacks(options.show, htmlOnMouseEnter),
      onMouseLeave: useAllCallbacks.useAllCallbacks(options.hide, htmlOnMouseLeave),
      "aria-describedby": options.unstable_hiddenId
    }, htmlProps);
  }
});
var TooltipReference = createComponent.createComponent({
  as: "div",
  useHook: useTooltipReference
});

exports.TooltipReference = TooltipReference;
exports.useTooltipReference = useTooltipReference;