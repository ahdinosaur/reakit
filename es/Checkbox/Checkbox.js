import { warning } from 'reakit-utils/warning';
import { useEffect, useState, useRef, useCallback } from 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import { useLiveRef } from 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import { useTabbable } from '../Tabbable/Tabbable.js';
import { removeIndexFromArray } from 'reakit-utils/removeIndexFromArray';
import 'reakit-utils/useSealedState';
import { useCheckboxState } from './CheckboxState.js';

function useIndeterminateState(checkboxRef, options) {
  useEffect(function () {
    if (!checkboxRef.current) {
      process.env.NODE_ENV !== "production" ? warning(options.state === "indeterminate", "Checkbox", "Can't set indeterminate state because `ref` wasn't passed to component.", "See https://reakit.io/docs/checkbox/#indeterminate-state") : void 0;
      return;
    }

    if (options.state === "indeterminate") {
      checkboxRef.current.indeterminate = true;
    } else if (checkboxRef.current.indeterminate) {
      checkboxRef.current.indeterminate = false;
    }
  }, [options.state, checkboxRef]);
}

function useDelayedEvent(event) {
  var eventRef = useLiveRef(event);

  var _React$useState = useState(null),
      delayedEvent = _React$useState[0],
      setDelayedEvent = _React$useState[1];

  useEffect(function () {
    if (delayedEvent && eventRef.current) {
      eventRef.current(delayedEvent);
      setDelayedEvent(null);
    }
  }, [delayedEvent]);
  return function (syntheticEvent) {
    syntheticEvent.persist();
    setDelayedEvent(syntheticEvent);
  };
}

var defaultClickKeys = [" "];

function getChecked(options) {
  var isBoolean = typeof options.value === "undefined";

  if (typeof options.checked !== "undefined") {
    return options.checked;
  }

  if (isBoolean) {
    return Boolean(options.state);
  }

  var state = Array.isArray(options.state) ? options.state : [];
  return state.indexOf(options.value) !== -1;
}

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
    var checked = getChecked(options);
    var setDelayedEvent = useDelayedEvent(htmlOnChange);
    useIndeterminateState(ref, options);
    var onChange = useCallback(function (event) {
      var state = options.state,
          value = options.value,
          setState = options.setState,
          disabled = options.disabled;
      if (disabled) return;

      if (htmlOnChange) {
        setDelayedEvent(event);
      }

      if (!setState) return;
      var isBoolean = typeof value === "undefined";

      if (isBoolean) {
        setState(!checked);
      } else {
        var array = Array.isArray(state) ? state : [];
        var index = array.indexOf(value);

        if (index === -1) {
          setState([].concat(array, [value]));
        } else {
          setState(removeIndexFromArray(array, index));
        }
      }
    }, [htmlOnChange, checked, options.disabled, options.setState, options.state, options.value]);
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
