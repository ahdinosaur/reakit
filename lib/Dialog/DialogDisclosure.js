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
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
var DialogState = require('./DialogState.js');
var HiddenDisclosure = require('../Hidden/HiddenDisclosure.js');

var useDialogDisclosure = createHook.createHook({
  name: "DialogDisclosure",
  compose: HiddenDisclosure.useHiddenDisclosure,
  useState: DialogState.useDialogState,
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      "aria-haspopup": "dialog"
    }, htmlProps);
  }
});
var DialogDisclosure = createComponent.createComponent({
  as: "button",
  useHook: useDialogDisclosure
});

exports.DialogDisclosure = DialogDisclosure;
exports.useDialogDisclosure = useDialogDisclosure;
