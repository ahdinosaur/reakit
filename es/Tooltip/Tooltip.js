import 'reakit-utils/warning';
import { useCallback, createElement } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import { usePipe } from 'reakit-utils/usePipe';
import 'reakit-utils/cx';
import '../Hidden/HiddenState.js';
import { useHidden } from '../Hidden/Hidden.js';
import 'react-dom';
import { Portal } from '../Portal/Portal.js';
import '../Dialog/DialogState.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { useTooltipState } from './TooltipState.js';

var useTooltip = createHook({
  name: "Tooltip",
  compose: useHidden,
  useState: useTooltipState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlStyle = _ref.style,
        htmlWrap = _ref.unstable_wrap,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "style", "unstable_wrap"]);

    var wrap = useCallback(function (children) {
      return createElement(Portal, null, children);
    }, []);
    return _objectSpread2({
      ref: mergeRefs(options.unstable_popoverRef, htmlRef),
      role: "tooltip",
      style: _objectSpread2({}, options.unstable_popoverStyles, {
        pointerEvents: "none"
      }, htmlStyle),
      unstable_wrap: usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var Tooltip = createComponent({
  as: "div",
  useHook: useTooltip
});

export { Tooltip, useTooltip };
