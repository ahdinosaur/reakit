'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var useSealedState = require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('../Dialog/DialogState.js');
require('popper.js');
var PopoverState = require('../Popover/PopoverState.js');

function useTooltipState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      _useSealedState$place = _useSealedState.placement,
      placement = _useSealedState$place === void 0 ? "top" : _useSealedState$place,
      _useSealedState$unsta = _useSealedState.unstable_boundariesElement,
      unstable_boundariesElement = _useSealedState$unsta === void 0 ? "window" : _useSealedState$unsta,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["placement", "unstable_boundariesElement"]);

  return PopoverState.usePopoverState(_rollupPluginBabelHelpers._objectSpread2({}, sealed, {
    placement: placement,
    unstable_boundariesElement: unstable_boundariesElement
  }));
}
var keys = [].concat(PopoverState.usePopoverState.__keys);
useTooltipState.__keys = keys;

exports.useTooltipState = useTooltipState;
