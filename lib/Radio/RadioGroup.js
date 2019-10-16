'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
var RadioState = require('./RadioState.js');

var useRadioGroup = createHook.createHook({
  name: "RadioGroup",
  compose: Box.useBox,
  useState: RadioState.useRadioState,
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "radiogroup"
    }, htmlProps);
  }
});
var RadioGroup = createComponent.createComponent({
  as: "fieldset",
  useHook: useRadioGroup,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "RadioGroup", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/radio") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.RadioGroup = RadioGroup;