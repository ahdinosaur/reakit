'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
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
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
require('reakit-utils/usePipe');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('../Hidden/Hidden.js');
var Dialog = require('../Dialog/Dialog.js');
require('body-scroll-lock');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/closest');
require('react-dom');
require('../Portal/Portal.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
require('popper.js');
var PopoverState = require('./PopoverState.js');

var usePopover = createHook.createHook({
  name: "Popover",
  compose: Dialog.useDialog,
  useState: PopoverState.usePopoverState,
  useOptions: function useOptions(_ref) {
    var _ref$modal = _ref.modal,
        modal = _ref$modal === void 0 ? false : _ref$modal,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["modal"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      modal: modal
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlStyle = _ref2.style,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["ref", "style"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(options.unstable_popoverRef, htmlRef),
      style: _rollupPluginBabelHelpers._objectSpread2({}, options.unstable_popoverStyles, {}, htmlStyle)
    }, htmlProps);
  }
});
var Popover = createComponent.createComponent({
  as: "div",
  useHook: usePopover,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "Popover", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/popover") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.Popover = Popover;
exports.usePopover = usePopover;