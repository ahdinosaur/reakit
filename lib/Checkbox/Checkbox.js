'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
var Tabbable = require('../Tabbable/Tabbable.js');
var removeIndexFromArray = require('reakit-utils/removeIndexFromArray');
require('reakit-utils/useSealedState');
var CheckboxState = require('./CheckboxState.js');

var defaultClickKeys = [" "];
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
    var isBoolean = typeof options.value === "undefined";
    var checked = typeof options.checked !== "undefined" ? options.checked : isBoolean ? Boolean(options.state) : (options.state || []).indexOf(options.value) !== -1;
    React.useEffect(function () {
      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning.warning(options.state === "indeterminate", "Checkbox", "Can't set indeterminate state because `ref` wasn't passed to component.", "See https://reakit.io/docs/checkbox") : void 0;
        return;
      }

      if (options.state === "indeterminate") {
        ref.current.indeterminate = true;
      } else if (ref.current.indeterminate) {
        ref.current.indeterminate = false;
      }
    }, [options.state]);
    var onChange = React.useCallback(function (event) {
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
          options.setState(removeIndexFromArray.removeIndexFromArray(array, index));
        }
      }
    }, [htmlOnChange, isBoolean, checked, options.disabled, options.setState, options.state, options.value]);
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
