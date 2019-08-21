import { warning } from 'reakit-utils/warning';
import { useRef, useEffect, useCallback } from 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import { useTabbable } from '../Tabbable/Tabbable.js';
import { removeIndexFromArray } from 'reakit-utils/removeIndexFromArray';
import 'reakit-utils/useSealedState';
import { useCheckboxState } from './CheckboxState.js';

var defaultClickKeys = [" "];
var useCheckbox = createHook({
  name: "Checkbox",
  compose: useTabbable,
  useState: useCheckboxState,
  keys: ["value", "checked"],
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnChange = _ref.onChange,
        htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "onChange", "onClick"]);

    var ref = useRef(null);
    var isBoolean = typeof options.value === "undefined";
    var checked = typeof options.checked !== "undefined" ? options.checked : isBoolean ? Boolean(options.state) : (options.state || []).indexOf(options.value) !== -1;
    useEffect(function () {
      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning(options.state === "indeterminate", "Checkbox", "Can't set indeterminate state because `ref` wasn't passed to component.", "See https://reakit.io/docs/checkbox") : void 0;
        return;
      }

      if (options.state === "indeterminate") {
        ref.current.indeterminate = true;
      } else if (ref.current.indeterminate) {
        ref.current.indeterminate = false;
      }
    }, [options.state]);
    var onChange = useCallback(function (event) {
      if (options.disabled) return;

      if (htmlOnChange) {
        htmlOnChange(event);
      }

      if (!options.setState) return;

      if (isBoolean) {
        options.setState(!checked);
      } else {
        var array = Array.isArray(options.state) ? options.state : [];
        var index = array.indexOf(options.value);

        if (index === -1) {
          options.setState([].concat(array, [options.value]));
        } else {
          options.setState(removeIndexFromArray(array, index));
        }
      }
    }, [htmlOnChange, isBoolean, checked, options.disabled, options.setState, options.state, options.value]);
    var onClick = useCallback(function (event) {
      if (event.target instanceof HTMLInputElement) return;
      onChange(event);
    }, [onChange]);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      checked: checked,
      "aria-checked": options.state === "indeterminate" ? "mixed" : checked,
      value: options.value,
      role: "checkbox",
      type: "checkbox",
      onChange: onChange,
      onClick: useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return useTabbable(_objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var Checkbox = createComponent({
  as: "input",
  useHook: useCheckbox
});

export { Checkbox, useCheckbox };
