import { warning } from 'reakit-utils/warning';
import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import '../Rover/RoverState.js';
import { useTabState } from './TabState.js';

var useTabList = createHook({
  name: "TabList",
  compose: useBox,
  useState: useTabState,
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      role: "tablist",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var TabList = createComponent({
  as: "div",
  useHook: useTabList,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "TabList", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/tab") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { TabList, useTabList };
