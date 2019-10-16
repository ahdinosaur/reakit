import { warning } from 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import { useRadioState } from './RadioState.js';

var useRadioGroup = createHook({
  name: "RadioGroup",
  compose: useBox,
  useState: useRadioState,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      role: "radiogroup"
    }, htmlProps);
  }
});
var RadioGroup = createComponent({
  as: "fieldset",
  useHook: useRadioGroup,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "RadioGroup", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/radio") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { RadioGroup };
