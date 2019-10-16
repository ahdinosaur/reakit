import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import 'reakit-utils/cx';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import { useHidden } from '../Hidden/Hidden.js';
import { useDialogState } from './DialogState.js';

var useDialogBackdrop = createHook({
  name: "DialogBackdrop",
  compose: useHidden,
  useState: useDialogState,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      id: undefined,
      role: "presentation"
    }, htmlProps);
  }
});
var DialogBackdrop = createComponent({
  as: "div",
  useHook: useDialogBackdrop
});

export { DialogBackdrop, useDialogBackdrop };
