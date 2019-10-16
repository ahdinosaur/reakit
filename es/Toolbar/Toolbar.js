import { warning } from 'reakit-utils/warning';
import 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import '../Rover/RoverState.js';
import { useToolbarState } from './ToolbarState.js';

var useToolbar = createHook({
  name: "Toolbar",
  compose: useBox,
  useState: useToolbarState,
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      role: "toolbar",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var Toolbar = createComponent({
  as: "div",
  useHook: useToolbar,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "Toolbar", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/toolbar") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { Toolbar, useToolbar };
