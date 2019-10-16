'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
var Hidden = require('../Hidden/Hidden.js');
var DialogState = require('./DialogState.js');

var useDialogBackdrop = createHook.createHook({
  name: "DialogBackdrop",
  compose: Hidden.useHidden,
  useState: DialogState.useDialogState,
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      id: undefined,
      role: "presentation"
    }, htmlProps);
  }
});
var DialogBackdrop = createComponent.createComponent({
  as: "div",
  useHook: useDialogBackdrop
});

exports.DialogBackdrop = DialogBackdrop;
exports.useDialogBackdrop = useDialogBackdrop;