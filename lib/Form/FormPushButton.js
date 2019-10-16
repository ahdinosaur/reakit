'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
var Button = require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/isPromise');
require('reakit-utils/isEmpty');
var FormState = require('./FormState.js');
require('reakit-utils/isObject');
require('./utils/setAllIn.js');
var getIn = require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');
var formatInputName = require('../formatInputName-0ecca8fe.js');
var getInputId = require('../getInputId-42bc3f17.js');
var getPushButtonId = require('../getPushButtonId-98bf74cc.js');

var unstable_useFormPushButton = createHook.createHook({
  name: "FormPushButton",
  compose: Button.useButton,
  useState: FormState.unstable_useFormState,
  keys: ["name", "value"],
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = React.useCallback(function () {
      options.push(options.name, options.value);

      var _unstable_getIn = getIn.unstable_getIn(options.values, options.name, []),
          length = _unstable_getIn.length;

      var inputId = getInputId.getInputId(formatInputName.formatInputName(options.name, "-") + "-" + length, options.baseId);
      if (!inputId) return;
      window.requestAnimationFrame(function () {
        var selector = "[id^=\"" + inputId + "\"]";
        var input = document.querySelector(selector);

        if (input) {
          input.focus();
        }
      });
    }, [options.push, options.name, options.value, options.values, options.baseId]);
    return _rollupPluginBabelHelpers._objectSpread2({
      id: getPushButtonId.getPushButtonId(options.name, options.baseId),
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormPushButton = createComponent.createComponent({
  as: "button",
  useHook: unstable_useFormPushButton
});

exports.unstable_FormPushButton = unstable_FormPushButton;
exports.unstable_useFormPushButton = unstable_useFormPushButton;
