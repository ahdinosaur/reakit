import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';

var useVisuallyHidden = createHook({
  name: "VisuallyHidden",
  compose: useBox,
  useProps: function useProps(_, _ref) {
    var htmlStyle = _ref.style,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["style"]);

    return _objectSpread2({
      style: _objectSpread2({
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      }, htmlStyle)
    }, htmlProps);
  }
});
var VisuallyHidden = createComponent({
  as: "span",
  useHook: useVisuallyHidden
});

export { VisuallyHidden, useVisuallyHidden };
