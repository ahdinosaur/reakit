'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
var useLiveRef = require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
var Tabbable = require('../Tabbable/Tabbable.js');
var removeIndexFromArray = require('reakit-utils/removeIndexFromArray');
require('reakit-utils/useSealedState');
var CheckboxState = require('./CheckboxState.js');

function useIndeterminateState(checkboxRef, options) {
  React.useEffect(function () {
    if (!checkboxRef.current) {
      process.env.NODE_ENV !== "production" ? warning.warning(options.state === "indeterminate", "Checkbox", "Can't set indeterminate state because `ref` wasn't passed to component.", "See https://reakit.io/docs/checkbox/#indeterminate-state") : void 0;
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
  var eventRef = useLiveRef.useLiveRef(event);

  var _React$useState = React.useState(null),
      delayedEvent = _React$useState[0],
      setDelayedEvent = _React$useState[1];

  React.useEffect(function () {
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

var useCheckbox = createHook.createHook({
  name: "Checkbox",
  compose: Tabbable.useTabbable,
  useState: CheckboxState.useCheckboxState,
  keys: ["value", "checked"],
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnChange = _ref.onChange,
        htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "onChange", "onClick"]);

    var ref = React.useRef(null);
    var checked = getChecked(options);
    var setDelayedEvent = useDelayedEvent(htmlOnChange);
    useIndeterminateState(ref, options);
    var onChange = React.useCallback(function (event) {
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
          setState(removeIndexFromArray.removeIndexFromArray(array, index));
        }
      }
    }, [htmlOnChange, checked, options.disabled, options.setState, options.state, options.value]);
    var onClick = React.useCallback(function (event) {
      if (event.target instanceof HTMLInputElement) return;
      onChange(event);
    }, [onChange]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      checked: checked,
      "aria-checked": options.state === "indeterminate" ? "mixed" : checked,
      value: options.value,
      role: "checkbox",
      type: "checkbox",
      onChange: onChange,
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return Tabbable.useTabbable(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var Checkbox = createComponent.createComponent({
  as: "input",
  useHook: useCheckbox
});

exports.Checkbox = Checkbox;
exports.useCheckbox = useCheckbox;
