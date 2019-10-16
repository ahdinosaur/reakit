import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
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

var unstable_useForm = createHook({
  name: "Form",
  compose: useBox,
  useState: unstable_useFormState,
  useProps: function useProps(options, _ref) {
    var htmlOnSubmit = _ref.onSubmit,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onSubmit"]);

    var onSubmit = useCallback(function (event) {
      event.preventDefault();
      options.submit();
    }, [options.submit]);
    return _objectSpread2({
      role: "form",
      noValidate: true,
      onSubmit: useAllCallbacks(onSubmit, htmlOnSubmit)
    }, htmlProps);
  }
});
var unstable_Form = createComponent({
  as: "form",
  useHook: unstable_useForm
});

export { unstable_Form, unstable_useForm };
