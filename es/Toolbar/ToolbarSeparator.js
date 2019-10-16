import 'reakit-utils/warning';
import 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useSealedState';
import '../Rover/RoverState.js';
import { useSeparator } from '../Separator/Separator.js';
import { useToolbarState } from './ToolbarState.js';

var useToolbarSeparator = createHook({
  name: "ToolbarSeparator",
  compose: useSeparator,
  useState: useToolbarState,
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "vertical" : _ref$orientation,
        options = _objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _objectSpread2({
      orientation: orientation === "vertical" ? "horizontal" : "vertical"
    }, options);
  }
});
var ToolbarSeparator = createComponent({
  as: "hr",
  useHook: useToolbarSeparator
});

export { ToolbarSeparator, useToolbarSeparator };