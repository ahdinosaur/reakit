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
require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');
require('../formatInputName-0ecca8fe.js');
var getInputId = require('../getInputId-42bc3f17.js');
var getPushButtonId = require('../getPushButtonId-98bf74cc.js');

var unstable_useFormRemoveButton = createHook.createHook({
  name: "FormRemoveButton",
  compose: Button.useButton,
  useState: FormState.unstable_useFormState,
  keys: ["name", "index"],
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = React.useCallback(function () {
      options.remove(options.name, options.index);
      var inputId = getInputId.getInputId(options.name, options.baseId);
      if (!inputId) return;
      window.requestAnimationFrame(function () {
        var selector = "[id^=\"" + inputId + "-\"]";
        var inputs = document.querySelectorAll(selector);

        if (inputs.length) {
          var inputsArray = Array.from(inputs);
          var nextIdx = inputsArray.reduce(function (final, input) {
            var match = input.id.match(new RegExp(inputId + "-([0-9]+)"));
            if (!match) return final;
            var idx = match[1];

            if (Number(idx) > final && options.index >= final) {
              return Number(idx);
            }

            return final;
          }, 0);
          var nextSelector = "[id^=\"" + inputId + "-" + nextIdx + "\"]";
          var input = document.querySelector(nextSelector);

          if (input) {
            input.focus();
            return;
          }
        }

        var pushButtonId = getPushButtonId.getPushButtonId(options.name, options.baseId);

        if (pushButtonId) {
          var pushButton = document.getElementById(pushButtonId);

          if (pushButton) {
            pushButton.focus();
          }
        }
      });
    }, [options.remove, options.name, options.index, options.baseId]);
    return _rollupPluginBabelHelpers._objectSpread2({
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormRemoveButton = createComponent.createComponent({
  as: "button",
  useHook: unstable_useFormRemoveButton
});

exports.unstable_FormRemoveButton = unstable_FormRemoveButton;
exports.unstable_useFormRemoveButton = unstable_useFormRemoveButton;
