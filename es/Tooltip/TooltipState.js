import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import '../Dialog/DialogState.js';
import 'popper.js';
import { usePopoverState } from '../Popover/PopoverState.js';

function useTooltipState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$place = _useSealedState.placement,
      placement = _useSealedState$place === void 0 ? "top" : _useSealedState$place,
      _useSealedState$unsta = _useSealedState.unstable_boundariesElement,
      unstable_boundariesElement = _useSealedState$unsta === void 0 ? "window" : _useSealedState$unsta,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["placement", "unstable_boundariesElement"]);

  return usePopoverState(_objectSpread2({}, sealed, {
    placement: placement,
    unstable_boundariesElement: unstable_boundariesElement
  }));
}
var keys = [].concat(usePopoverState.__keys);
useTooltipState.__keys = keys;

export { useTooltipState };
