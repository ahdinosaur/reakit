import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import { useButton } from '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/isPromise';
import 'reakit-utils/isEmpty';
import { unstable_useFormState } from './FormState.js';
import 'reakit-utils/isObject';
import './utils/setAllIn.js';
import { unstable_getIn } from './utils/getIn.js';
import 'reakit-utils/toArray';
import 'reakit-utils/isInteger';
import './utils/setIn.js';
import { f as formatInputName } from '../formatInputName-80808a2f.js';
import { g as getInputId } from '../getInputId-c48e116d.js';
import { g as getPushButtonId } from '../getPushButtonId-5d1d03ac.js';

var unstable_useFormPushButton = createHook({
  name: "FormPushButton",
  compose: useButton,
  useState: unstable_useFormState,
  keys: ["name", "value"],
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = useCallback(function () {
      options.push(options.name, options.value);

      var _unstable_getIn = unstable_getIn(options.values, options.name, []),
          length = _unstable_getIn.length;

      var inputId = getInputId(formatInputName(options.name, "-") + "-" + length, options.baseId);
      if (!inputId) return;
      window.requestAnimationFrame(function () {
        var selector = "[id^=\"" + inputId + "\"]";
        var input = document.querySelector(selector);

        if (input) {
          input.focus();
        }
      });
    }, [options.push, options.name, options.value, options.values, options.baseId]);
    return _objectSpread2({
      id: getPushButtonId(options.name, options.baseId),
      onClick: useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormPushButton = createComponent({
  as: "button",
  useHook: unstable_useFormPushButton
});

export { unstable_FormPushButton, unstable_useFormPushButton };
