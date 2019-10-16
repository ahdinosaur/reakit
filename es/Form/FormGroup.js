import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
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
import { g as getMessageId, s as shouldShowError } from '../shouldShowError-bcf0431c.js';
import { useGroup } from '../Group/Group.js';

var unstable_useFormGroup = createHook({
  name: "FormGroup",
  compose: useGroup,
  useState: unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      id: getInputId(options.name, options.baseId),
      tabIndex: -1,
      "aria-describedby": getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId(options.name, options.baseId),
      "aria-invalid": shouldShowError(options, options.name)
    }, htmlProps);
  }
});
var unstable_FormGroup = createComponent({
  as: "fieldset",
  useHook: unstable_useFormGroup
});

export { unstable_FormGroup, unstable_useFormGroup };
