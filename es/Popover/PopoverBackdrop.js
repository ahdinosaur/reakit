import 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import 'reakit-utils/cx';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import '../Hidden/Hidden.js';
import '../Dialog/DialogState.js';
import { useDialogBackdrop } from '../Dialog/DialogBackdrop.js';
import 'popper.js';
import { usePopoverState } from './PopoverState.js';

var usePopoverBackdrop = createHook({
  name: "PopoverBackdrop",
  compose: useDialogBackdrop,
  useState: usePopoverState
});
var PopoverBackdrop = createComponent({
  as: "div",
  useHook: usePopoverBackdrop
});

export { PopoverBackdrop, usePopoverBackdrop };