import 'reakit-utils/warning';
import { useContext, useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2, _ as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/usePipe';
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
import '../getInputId-c48e116d.js';
import '../getLabelId-2629eed4.js';
import '../shouldShowError-bcf0431c.js';
import '../Group/Group.js';
import './FormGroup.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Radio/RadioState.js';
import { useRadio } from '../Radio/Radio.js';
import { FormRadioGroupContext } from './FormRadioGroup.js';

var unstable_useFormRadio = createHook({
  name: "FormRadio",
  compose: useRadio,
  useState: unstable_useFormState,
  keys: ["name", "value"],
  useOptions: function useOptions(options) {
    var rover = useContext(FormRadioGroupContext);
    var currentChecked = unstable_getIn(options.values, options.name);
    var checked = currentChecked === options.value;

    if (!rover) {
      // TODO: Better error
      throw new Error("Missing FormRadioGroup");
    }

    return _objectSpread2({}, rover, {}, options, {
      checked: checked
    });
  },
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnBlur = _ref.onBlur,
        htmlOnFocus = _ref.onFocus,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onChange", "onBlur", "onFocus"]);

    var onChange = useCallback(function () {
      options.update(options.name, options.value);
    }, [options.update, options.name, options.value]);
    var onBlur = useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    var onFocus = useCallback(function () {
      options.update(options.name, options.value);
    }, [options.update, options.name, options.value]);
    return _objectSpread2({
      name: formatInputName(options.name),
      onChange: useAllCallbacks(onChange, htmlOnChange),
      onBlur: useAllCallbacks(onBlur, htmlOnBlur),
      onFocus: useAllCallbacks(onFocus, htmlOnFocus)
    }, htmlProps);
  }
});
var unstable_FormRadio = createComponent({
  as: "input",
  useHook: unstable_useFormRadio
});

export { unstable_FormRadio, unstable_useFormRadio };
