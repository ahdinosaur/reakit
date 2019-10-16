import { useRef, useState, useEffect } from 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import { useTabbable } from '../Tabbable/Tabbable.js';

var useButton = createHook({
  name: "Button",
  compose: useTabbable,
  useProps: function useProps(_, _ref) {
    var htmlRef = _ref.ref,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref"]);

    var ref = useRef(null);

    var _React$useState = useState(undefined),
        role = _React$useState[0],
        setRole = _React$useState[1];

    useEffect(function () {
      if (ref.current && (ref.current instanceof HTMLButtonElement || ref.current instanceof HTMLAnchorElement || ref.current instanceof HTMLInputElement)) {
        return;
      }

      setRole("button");
    }, []);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      role: role,
      type: "button"
    }, htmlProps);
  }
});
var Button = createComponent({
  as: "button",
  useHook: useButton
});

export { Button, useButton };
