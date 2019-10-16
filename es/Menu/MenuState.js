import 'reakit-utils/warning';
import { useContext, useEffect } from 'react';
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
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import { usePopoverState } from '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-3392c089.js';
import { useMenuBarState } from './MenuBarState.js';

function useMenuState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "vertical" : _useSealedState$orien,
      _useSealedState$gutte = _useSealedState.gutter,
      gutter = _useSealedState$gutte === void 0 ? 0 : _useSealedState$gutte,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["orientation", "gutter"]);

  var parent = useContext(MenuContext);
  var placement = sealed.placement || (parent && parent.orientation === "vertical" ? "right-start" : "bottom-start");
  var menuBar = useMenuBarState(_objectSpread2({}, sealed, {
    orientation: orientation
  }));
  var popover = usePopoverState(_objectSpread2({}, sealed, {
    placement: placement,
    gutter: gutter
  }));
  useEffect(function () {
    if (!popover.visible) {
      menuBar.unstable_reset();
    }
  }, [popover.visible]);
  return _objectSpread2({}, menuBar, {}, popover);
}
var keys = [].concat(useMenuBarState.__keys, usePopoverState.__keys);
useMenuState.__keys = keys;

export { useMenuState };
