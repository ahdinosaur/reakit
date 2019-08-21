import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';

var useSeparator = createHook({
  name: "Separator",
  compose: useBox,
  keys: ["orientation"],
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
        options = _objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _objectSpread2({
      orientation: orientation
    }, options);
  },
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      role: "separator",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var Separator = createComponent({
  as: "hr",
  useHook: useSeparator
});

export { Separator, useSeparator };
