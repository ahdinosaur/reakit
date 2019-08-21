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
import '../Hidden/HiddenState.js';
import { useHidden } from '../Hidden/Hidden.js';
import '../Rover/RoverState.js';
import { a as getTabPanelId, g as getTabId } from '../__utils-e3f43a24.js';
import { useTabState } from './TabState.js';

var useTabPanel = createHook({
  name: "TabPanel",
  compose: useHidden,
  useState: useTabState,
  keys: ["stopId"],
  useOptions: function useOptions(options) {
    return _objectSpread2({
      visible: options.selectedId === options.stopId
    }, options);
  },
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      role: "tabpanel",
      tabIndex: 0,
      id: getTabPanelId(options.stopId, options.unstable_baseId),
      "aria-labelledby": getTabId(options.stopId, options.unstable_baseId)
    }, htmlProps);
  }
});
var TabPanel = createComponent({
  as: "div",
  useHook: useTabPanel
});

export { TabPanel, useTabPanel };
