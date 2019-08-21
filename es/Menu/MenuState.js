import 'reakit-utils/warning';
import { useState, useContext, useEffect, useCallback } from 'react';
import 'reakit-utils/useId';
import 'reakit-system/createComponent';
import 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import 'reakit-utils/useUpdateEffect';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import { useRoverState } from '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import { usePopoverState } from '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-a9fa26a4.js';

function useMenuState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "vertical" : _useSealedState$orien,
      _useSealedState$unsta = _useSealedState.unstable_gutter,
      initialGutter = _useSealedState$unsta === void 0 ? 0 : _useSealedState$unsta,
      _useSealedState$unsta2 = _useSealedState.unstable_values,
      initialValues = _useSealedState$unsta2 === void 0 ? {} : _useSealedState$unsta2,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["orientation", "unstable_gutter", "unstable_values"]);

  var _React$useState = useState(initialValues),
      values = _React$useState[0],
      setValues = _React$useState[1];

  var parent = useContext(MenuContext);
  var placement = sealed.placement || (parent && parent.orientation === "vertical" ? "right-start" : "bottom-start");
  var rover = useRoverState(_objectSpread2({}, sealed, {
    orientation: orientation
  }));
  var popover = usePopoverState(_objectSpread2({}, sealed, {
    placement: placement,
    unstable_gutter: initialGutter
  }));
  useEffect(function () {
    if (!popover.visible) {
      rover.unstable_reset();
    }
  }, [popover.visible]);
  return _objectSpread2({}, rover, {}, popover, {
    unstable_values: values,
    unstable_update: useCallback(function (name, value) {
      setValues(function (vals) {
        var _objectSpread2$1;

        return _objectSpread2({}, vals, (_objectSpread2$1 = {}, _objectSpread2$1[name] = typeof value === "function" ? value(vals) : value, _objectSpread2$1));
      });
    }, [])
  });
}
var keys = [].concat(useRoverState.__keys, usePopoverState.__keys, ["unstable_values", "unstable_update"]);
useMenuState.__keys = keys;

export { useMenuState };
