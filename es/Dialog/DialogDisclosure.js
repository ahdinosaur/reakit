import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import { useDialogState } from './DialogState.js';
import { useHiddenDisclosure } from '../Hidden/HiddenDisclosure.js';

var useDialogDisclosure = createHook({
  name: "DialogDisclosure",
  compose: useHiddenDisclosure,
  useState: useDialogState,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      "aria-haspopup": "dialog"
    }, htmlProps);
  }
});
var DialogDisclosure = createComponent({
  as: "button",
  useHook: useDialogDisclosure
});

export { DialogDisclosure, useDialogDisclosure };
