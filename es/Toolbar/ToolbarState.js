import 'reakit-utils/warning';
import 'react';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import { useRoverState } from '../Rover/RoverState.js';

function useToolbarState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "horizontal" : _useSealedState$orien,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["orientation"]);

  return useRoverState(_objectSpread2({
    orientation: orientation
  }, sealed));
}
var keys = [].concat(useRoverState.__keys);
useToolbarState.__keys = keys;

export { useToolbarState };
