import 'reakit-utils/warning';
import { createContext, useMemo, useCallback, createElement } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useSealedState';
import { usePipe } from 'reakit-utils/usePipe';
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
import '../getInputId-c48e116d.js';
import '../getLabelId-2629eed4.js';
import '../shouldShowError-bcf0431c.js';
import '../Group/Group.js';
import { unstable_useFormGroup } from './FormGroup.js';
import { useRoverState } from '../Rover/RoverState.js';

var FormRadioGroupContext = createContext(null);
var unstable_useFormRadioGroup = createHook({
  name: "FormRadioGroup",
  compose: unstable_useFormGroup,
  useState: unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(_, _ref) {
    var htmlWrap = _ref.unstable_wrap,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["unstable_wrap"]);

    var rover = useRoverState({
      loop: true
    });
    var providerValue = useMemo(function () {
      return rover;
    }, [rover.stops, rover.currentId, rover.unstable_pastId]);
    var wrap = useCallback(function (children) {
      return createElement(FormRadioGroupContext.Provider, {
        value: providerValue
      }, children);
    }, [providerValue]);
    return _objectSpread2({
      role: "radiogroup",
      unstable_wrap: usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var unstable_FormRadioGroup = createComponent({
  as: "fieldset",
  useHook: unstable_useFormRadioGroup
});

export { FormRadioGroupContext, unstable_FormRadioGroup, unstable_useFormRadioGroup };
