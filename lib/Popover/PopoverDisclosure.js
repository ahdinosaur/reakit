'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('../Dialog/DialogState.js');
require('../Hidden/HiddenDisclosure.js');
var DialogDisclosure = require('../Dialog/DialogDisclosure.js');
require('popper.js');
var PopoverState = require('./PopoverState.js');

var usePopoverDisclosure = createHook.createHook({
  name: "PopoverDisclosure",
  compose: DialogDisclosure.useDialogDisclosure,
  useState: PopoverState.usePopoverState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(options.unstable_referenceRef, htmlRef)
    }, htmlProps);
  }
});
var PopoverDisclosure = createComponent.createComponent({
  as: "button",
  useHook: usePopoverDisclosure
});

exports.PopoverDisclosure = PopoverDisclosure;
exports.usePopoverDisclosure = usePopoverDisclosure;
