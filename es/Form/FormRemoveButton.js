import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import { useButton } from '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/isPromise';
import 'reakit-utils/isEmpty';
import { unstable_useFormState } from './FormState.js';
import 'reakit-utils/isObject';
import './utils/setAllIn.js';
import './utils/getIn.js';
import 'reakit-utils/toArray';
import 'reakit-utils/isInteger';
import './utils/setIn.js';
import '../formatInputName-80808a2f.js';
import { g as getInputId } from '../getInputId-c48e116d.js';
import { g as getPushButtonId } from '../getPushButtonId-5d1d03ac.js';

var unstable_useFormRemoveButton = createHook({
  name: "FormRemoveButton",
  compose: useButton,
  useState: unstable_useFormState,
  keys: ["name", "index"],
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = useCallback(function () {
      options.remove(options.name, options.index);
      var inputId = getInputId(options.name, options.baseId);
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

        var pushButtonId = getPushButtonId(options.name, options.baseId);

        if (pushButtonId) {
          var pushButton = document.getElementById(pushButtonId);

          if (pushButton) {
            pushButton.focus();
          }
        }
      });
    }, [options.remove, options.name, options.index, options.baseId]);
    return _objectSpread2({
      onClick: useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormRemoveButton = createComponent({
  as: "button",
  useHook: unstable_useFormRemoveButton
});

export { unstable_FormRemoveButton, unstable_useFormRemoveButton };
