import { warning } from 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import 'reakit-utils/usePipe';
import 'reakit-utils/cx';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import '../Hidden/Hidden.js';
import { useDialog } from '../Dialog/Dialog.js';
import 'body-scroll-lock';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/closest';
import 'react-dom';
import '../Portal/Portal.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import 'popper.js';
import { usePopoverState } from './PopoverState.js';

var usePopover = createHook({
  name: "Popover",
  compose: useDialog,
  useState: usePopoverState,
  useOptions: function useOptions(_ref) {
    var _ref$modal = _ref.modal,
        modal = _ref$modal === void 0 ? false : _ref$modal,
        options = _objectWithoutPropertiesLoose(_ref, ["modal"]);

    return _objectSpread2({
      modal: modal
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlStyle = _ref2.style,
        htmlProps = _objectWithoutPropertiesLoose(_ref2, ["ref", "style"]);

    return _objectSpread2({
      ref: mergeRefs(options.unstable_popoverRef, htmlRef),
      style: _objectSpread2({}, options.unstable_popoverStyles, {}, htmlStyle)
    }, htmlProps);
  }
});
var Popover = createComponent({
  as: "div",
  useHook: usePopover,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "Popover", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/popover") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { Popover, usePopover };
