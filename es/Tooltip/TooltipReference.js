import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import '../Dialog/DialogState.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { useTooltipState } from './TooltipState.js';

var useTooltipReference = createHook({
  name: "TooltipReference",
  compose: useBox,
  useState: useTooltipState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlur = _ref.onBlur,
        htmlOnMouseEnter = _ref.onMouseEnter,
        htmlOnMouseLeave = _ref.onMouseLeave,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]);

    return _objectSpread2({
      ref: mergeRefs(options.unstable_referenceRef, htmlRef),
      tabIndex: 0,
      onFocus: useAllCallbacks(options.show, htmlOnFocus),
      onBlur: useAllCallbacks(options.hide, htmlOnBlur),
      onMouseEnter: useAllCallbacks(options.show, htmlOnMouseEnter),
      onMouseLeave: useAllCallbacks(options.hide, htmlOnMouseLeave),
      "aria-describedby": options.unstable_hiddenId
    }, htmlProps);
  }
});
var TooltipReference = createComponent({
  as: "div",
  useHook: useTooltipReference
});

export { TooltipReference, useTooltipReference };
