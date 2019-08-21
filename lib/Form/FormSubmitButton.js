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
require('../Tabbable/Tabbable.js');
var Button = require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/isPromise');
require('reakit-utils/isEmpty');
var FormState = require('./FormState.js');
require('reakit-utils/isObject');
require('./utils/setAllIn.js');
require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');

function getFirstInvalidInput(baseId) {
  var selector = "[aria-invalid=true][id^=" + baseId + "]";
  return document.querySelector(selector);
}

var unstable_useFormSubmitButton = createHook.createHook({
  name: "FormSubmitButton",
  compose: Button.useButton,
  useState: FormState.unstable_useFormState,
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = React.useCallback(function () {
      window.requestAnimationFrame(function () {
        var input = getFirstInvalidInput(options.baseId);

        if (input) {
          input.focus();

          if ("select" in input) {
            input.select();
          }
        }
      });
    }, [options.baseId]);
    return _rollupPluginBabelHelpers._objectSpread2({
      type: "submit",
      disabled: options.submitting,
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormSubmitButton = createComponent.createComponent({
  as: "button",
  useHook: unstable_useFormSubmitButton
});

exports.unstable_FormSubmitButton = unstable_FormSubmitButton;
exports.unstable_useFormSubmitButton = unstable_useFormSubmitButton;
