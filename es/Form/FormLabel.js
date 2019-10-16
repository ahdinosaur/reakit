import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useLiveRef';
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
import { g as getLabelId } from '../getLabelId-2629eed4.js';

var unstable_useFormLabel = createHook({
  name: "FormLabel",
  compose: useBox,
  useState: unstable_useFormState,
  keys: ["name", "label"],
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      children: options.label,
      id: getLabelId(options.name, options.baseId),
      htmlFor: getInputId(options.name, options.baseId)
    }, htmlProps);
  }
});
var unstable_FormLabel = createComponent({
  as: "label",
  useHook: unstable_useFormLabel
});

export { unstable_FormLabel, unstable_useFormLabel };
