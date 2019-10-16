'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('../Hidden/Hidden.js');
require('../Dialog/DialogState.js');
var DialogBackdrop = require('../Dialog/DialogBackdrop.js');
require('popper.js');
var PopoverState = require('./PopoverState.js');

var usePopoverBackdrop = createHook.createHook({
  name: "PopoverBackdrop",
  compose: DialogBackdrop.useDialogBackdrop,
  useState: PopoverState.usePopoverState
});
var PopoverBackdrop = createComponent.createComponent({
  as: "div",
  useHook: usePopoverBackdrop
});

exports.PopoverBackdrop = PopoverBackdrop;
exports.usePopoverBackdrop = usePopoverBackdrop;
