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
import 'reakit-utils/useIsomorphicEffect';
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
  keys: ["unstable_portal"],
  useOptions: function useOptions(_ref) {
    var _ref$unstable_portal = _ref.unstable_portal,
        unstable_portal = _ref$unstable_portal === void 0 ? true : _ref$unstable_portal,
        options = _objectWithoutPropertiesLoose(_ref, ["unstable_portal"]);

    return _objectSpread2({
      unstable_portal: unstable_portal
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlStyle = _ref2.style,
        htmlWrap = _ref2.unstable_wrap,
        htmlProps = _objectWithoutPropertiesLoose(_ref2, ["ref", "style", "unstable_wrap"]);

    var wrap = useCallback(function (children) {
      if (options.unstable_portal) {
        return createElement(Portal, null, children);
      }

      return children;
    }, [options.unstable_portal]);
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
