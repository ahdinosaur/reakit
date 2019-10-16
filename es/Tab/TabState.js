import 'reakit-utils/warning';
import { useState } from 'react';
import { useId } from 'reakit-utils/useId';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import { useRoverState } from '../Rover/RoverState.js';

function useTabState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var defaultId = useId("tab-");

  var _useSealedState = useSealedState(initialState),
      _useSealedState$unsta = _useSealedState.unstable_baseId,
      baseId = _useSealedState$unsta === void 0 ? defaultId : _useSealedState$unsta,
      _useSealedState$selec = _useSealedState.selectedId,
      sealedSelectedId = _useSealedState$selec === void 0 ? null : _useSealedState$selec,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? true : _useSealedState$loop,
      _useSealedState$manua = _useSealedState.manual,
      manual = _useSealedState$manua === void 0 ? false : _useSealedState$manua,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["unstable_baseId", "selectedId", "loop", "manual"]);

  var _React$useState = useState(sealedSelectedId),
      selectedId = _React$useState[0],
      select = _React$useState[1];

  var rover = useRoverState(_objectSpread2({
    loop: loop,
    currentId: selectedId
  }, sealed));
  return _objectSpread2({}, rover, {
    unstable_baseId: baseId,
    selectedId: selectedId,
    manual: manual,
    select: select
  });
}
var keys = [].concat(useRoverState.__keys, ["unstable_baseId", "selectedId", "select", "manual"]);
useTabState.__keys = keys;

export { useTabState };