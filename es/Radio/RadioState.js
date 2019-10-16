import 'reakit-utils/warning';
import { useState } from 'react';
import 'reakit-utils/useId';
import 'reakit-system/createComponent';
import 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import 'reakit-utils/createOnKeyDown';
import { useRoverState } from '../Rover/RoverState.js';
import '../Rover/Rover.js';

function useRadioState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      initialCurrentValue = _useSealedState.state,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? true : _useSealedState$loop,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["state", "loop"]);

  var _React$useState = useState(initialCurrentValue),
      state = _React$useState[0],
      setState = _React$useState[1];

  var rover = useRoverState(_objectSpread2({}, sealed, {
    loop: loop
  }));
  return _objectSpread2({}, rover, {
    state: state,
    setState: setState
  });
}
var keys = [].concat(useRoverState.__keys, ["state", "setState"]);
useRadioState.__keys = keys;

export { useRadioState };
