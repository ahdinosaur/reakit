'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
var Rover = require('../Rover/Rover.js');
var RadioState = require('./RadioState.js');

var defaultClickKeys = [" "];
var useRadio = createHook.createHook({
  name: "Radio",
  compose: Rover.useRover,
  useState: RadioState.useRadioState,
  keys: ["value", "checked"],
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnClick = _ref.onClick,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onChange", "onClick"]);

    var checked = typeof options.checked !== "undefined" ? options.checked : options.state === options.value;
    var onChange = React.useCallback(function (event) {
      if (htmlOnChange) {
        htmlOnChange(event);
      }

      if (options.disabled || !options.setState) return;
      options.setState(options.value);
    }, [htmlOnChange, options.disabled, options.setState, options.value]);
    var onClick = React.useCallback(function (event) {
      if (event.target instanceof HTMLInputElement) return;
      onChange(event);
    }, [onChange]);
    return _rollupPluginBabelHelpers._objectSpread2({
      checked: checked,
      "aria-checked": checked,
      value: options.value,
      role: "radio",
      type: "radio",
      onChange: onChange,
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return Rover.useRover(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var Radio = createComponent.createComponent({
  as: "input",
  useHook: useRadio
});

exports.Radio = Radio;
exports.useRadio = useRadio;