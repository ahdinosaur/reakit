import 'reakit-utils/warning';
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
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import '../Dialog/DialogState.js';
import '../Hidden/HiddenDisclosure.js';
import { useDialogDisclosure } from '../Dialog/DialogDisclosure.js';
import 'popper.js';
import { usePopoverState } from './PopoverState.js';

var usePopoverDisclosure = createHook({
  name: "PopoverDisclosure",
  compose: useDialogDisclosure,
  useState: usePopoverState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref"]);

    return _objectSpread2({
      ref: mergeRefs(options.unstable_referenceRef, htmlRef)
    }, htmlProps);
  }
});
var PopoverDisclosure = createComponent({
  as: "button",
  useHook: usePopoverDisclosure
});

export { PopoverDisclosure, usePopoverDisclosure };
