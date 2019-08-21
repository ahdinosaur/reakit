'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('../Dialog/DialogState.js');
require('popper.js');
require('../Popover/PopoverState.js');
var PopoverArrow = require('../Popover/PopoverArrow.js');
var TooltipState = require('./TooltipState.js');

var useTooltipArrow = createHook.createHook({
  name: "TooltipArrow",
  compose: PopoverArrow.usePopoverArrow,
  useState: TooltipState.useTooltipState,
  useOptions: function useOptions(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 16 : _ref$size,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["size"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      size: size
    }, options);
  }
});
var TooltipArrow = createComponent.createComponent({
  as: "div",
  useHook: useTooltipArrow
});

exports.TooltipArrow = TooltipArrow;
exports.useTooltipArrow = useTooltipArrow;
