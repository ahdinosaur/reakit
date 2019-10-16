import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2, _ as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers-4b09989f.js';
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
import './utils/getIn.js';
import 'reakit-utils/toArray';
import 'reakit-utils/isInteger';
import './utils/setIn.js';

function getFirstInvalidInput(baseId) {
  var selector = "[aria-invalid=true][id^=" + baseId + "]";
  return document.querySelector(selector);
}

var unstable_useFormSubmitButton = createHook({
  name: "FormSubmitButton",
  compose: useButton,
  useState: unstable_useFormState,
  useOptions: function useOptions(options) {
    return _objectSpread2({
      disabled: options.submitting
    }, options);
  },
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onClick"]);

    var onClick = useCallback(function () {
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
    return _objectSpread2({
      type: "submit",
      onClick: useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  }
});
var unstable_FormSubmitButton = createComponent({
  as: "button",
  useHook: unstable_useFormSubmitButton
});

export { unstable_FormSubmitButton, unstable_useFormSubmitButton };