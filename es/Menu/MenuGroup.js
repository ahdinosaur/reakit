import 'reakit-utils/warning';
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
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import '../MenuContext-3392c089.js';
import './MenuBarState.js';
import { useMenuState } from './MenuState.js';

var useMenuGroup = createHook({
  name: "MenuGroup",
  compose: useBox,
  useState: useMenuState,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      role: "group"
    }, htmlProps);
  }
});
var MenuGroup = createComponent({
  as: "div",
  useHook: useMenuGroup
});

export { MenuGroup, useMenuGroup };
