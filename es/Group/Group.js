import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';

var useGroup = createHook({
  name: "Group",
  compose: useBox,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      role: "group"
    }, htmlProps);
  }
});
var Group = createComponent({
  as: "div",
  useHook: useGroup
});

export { Group, useGroup };