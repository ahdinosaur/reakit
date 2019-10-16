import 'reakit-utils/warning';
import { useState, useCallback } from 'react';
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

function useMenuBarState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "horizontal" : _useSealedState$orien,
      _useSealedState$unsta = _useSealedState.unstable_values,
      initialValues = _useSealedState$unsta === void 0 ? {} : _useSealedState$unsta,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["orientation", "unstable_values"]);

  var _React$useState = useState(initialValues),
      values = _React$useState[0],
      setValues = _React$useState[1];

  var rover = useRoverState(_objectSpread2({}, sealed, {
    orientation: orientation
  }));
  return _objectSpread2({}, rover, {
    unstable_values: values,
    unstable_update: useCallback(function (name, value) {
      setValues(function (vals) {
        var _objectSpread2$1;

        return _objectSpread2({}, vals, (_objectSpread2$1 = {}, _objectSpread2$1[name] = typeof value === "function" ? value(vals) : value, _objectSpread2$1));
      });
    }, [])
  });
}
var keys = [].concat(useRoverState.__keys, ["unstable_values", "unstable_update"]);
useMenuBarState.__keys = keys;

export { useMenuBarState };
