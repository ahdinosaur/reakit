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
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
var Button = require('../Button/Button.js');
require('reakit-utils/useSealedState');
var HiddenState = require('./HiddenState.js');

var useHiddenDisclosure = createHook.createHook({
  name: "HiddenDisclosure",
  compose: Button.useButton,
  useState: HiddenState.useHiddenState,
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onClick"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      onClick: useAllCallbacks.useAllCallbacks(options.toggle, htmlOnClick),
      "aria-expanded": Boolean(options.visible),
      "aria-controls": options.unstable_hiddenId
    }, htmlProps);
  }
});
var HiddenDisclosure = createComponent.createComponent({
  as: "button",
  useHook: useHiddenDisclosure
});

exports.HiddenDisclosure = HiddenDisclosure;
exports.useHiddenDisclosure = useHiddenDisclosure;
