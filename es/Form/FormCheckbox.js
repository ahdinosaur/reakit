import 'reakit-utils/warning';
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
import 'reakit-utils/removeIndexFromArray';
import 'reakit-utils/useSealedState';
import '../Checkbox/CheckboxState.js';
import { useCheckbox } from '../Checkbox/Checkbox.js';
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

var unstable_useFormCheckbox = createHook({
  name: "FormCheckbox",
  compose: useCheckbox,
  useState: unstable_useFormState,
  keys: ["name", "value"],
  useProps: function useProps(options, _ref) {
    var htmlOnBlur = _ref.onBlur,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onBlur"]);

    var isBoolean = typeof options.value === "undefined";
    var onBlur = useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    return _objectSpread2({
      "aria-invalid": shouldShowError(options, options.name),
      name: formatInputName(options.name),
      onBlur: useAllCallbacks(onBlur, htmlOnBlur)
    }, isBoolean ? {
      id: getInputId(options.name, options.baseId),
      "aria-describedby": getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId(options.name, options.baseId)
    } : {}, {}, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    var state = unstable_getIn(options.values, options.name);

    var setState = function setState(value) {
      return options.update(options.name, value);
    };

    return useCheckbox(_objectSpread2({}, options, {
      state: state,
      setState: setState
    }), htmlProps);
  }
});
var unstable_FormCheckbox = createComponent({
  as: "input",
  useHook: unstable_useFormCheckbox
});

export { unstable_FormCheckbox, unstable_useFormCheckbox };
