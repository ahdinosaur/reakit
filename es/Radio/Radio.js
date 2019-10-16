import 'reakit-utils/warning';
import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import { useRover } from '../Rover/Rover.js';
import { useRadioState } from './RadioState.js';

var defaultClickKeys = [" "];
var useRadio = createHook({
  name: "Radio",
  compose: useRover,
  useState: useRadioState,
  keys: ["value", "checked"],
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onChange", "onClick"]);

    var checked = typeof options.checked !== "undefined" ? options.checked : options.state === options.value;
    var onChange = useCallback(function (event) {
      if (htmlOnChange) {
        htmlOnChange(event);
      }

      if (options.disabled || !options.setState) return;
      options.setState(options.value);
    }, [htmlOnChange, options.disabled, options.setState, options.value]);
    var onClick = useCallback(function (event) {
      if (event.target instanceof HTMLInputElement) return;
      onChange(event);
    }, [onChange]);
    return _objectSpread2({
      checked: checked,
      "aria-checked": checked,
      value: options.value,
      role: "radio",
      type: "radio",
      onChange: onChange,
      onClick: useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return useRover(_objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var Radio = createComponent({
  as: "input",
  useHook: useRadio
});

export { Radio, useRadio };