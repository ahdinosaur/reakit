import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import { useTabbable } from '../Tabbable/Tabbable.js';
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
import { g as getLabelId } from '../getLabelId-2629eed4.js';
import { g as getMessageId, s as shouldShowError } from '../shouldShowError-bcf0431c.js';

var defaultClickKeys = [];
var unstable_useFormInput = createHook({
  name: "FormInput",
  compose: useTabbable,
  useState: unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnBlur = _ref.onBlur,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onChange", "onBlur"]);

    var onChange = useCallback(function (event) {
      options.update(options.name, event.target.value);
    }, [options.update, options.name]);
    var onBlur = useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    return _objectSpread2({
      id: getInputId(options.name, options.baseId),
      name: formatInputName(options.name),
      value: unstable_getIn(options.values, options.name, ""),
      onChange: useAllCallbacks(onChange, htmlOnChange),
      onBlur: useAllCallbacks(onBlur, htmlOnBlur),
      "aria-describedby": getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId(options.name, options.baseId),
      "aria-invalid": shouldShowError(options, options.name)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return useTabbable(_objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var unstable_FormInput = createComponent({
  as: "input",
  useHook: unstable_useFormInput
});

export { unstable_FormInput, unstable_useFormInput };
