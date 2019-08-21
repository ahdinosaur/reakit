import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import { useRover } from '../Rover/Rover.js';
import { useToolbarState } from './ToolbarState.js';

var useToolbarItem = createHook({
  name: "ToolbarItem",
  compose: useRover,
  useState: useToolbarState
});
var ToolbarItem = createComponent({
  as: "button",
  useHook: useToolbarItem
});

export { ToolbarItem, useToolbarItem };
