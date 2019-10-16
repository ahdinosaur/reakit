import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import '../Dialog/DialogState.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { usePopoverArrow } from '../Popover/PopoverArrow.js';
import { useTooltipState } from './TooltipState.js';

var useTooltipArrow = createHook({
  name: "TooltipArrow",
  compose: usePopoverArrow,
  useState: useTooltipState,
  useOptions: function useOptions(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 16 : _ref$size,
        options = _objectWithoutPropertiesLoose(_ref, ["size"]);

    return _objectSpread2({
      size: size
    }, options);
  }
});
var TooltipArrow = createComponent({
  as: "div",
  useHook: useTooltipArrow
});

export { TooltipArrow, useTooltipArrow };
