'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
require('reakit-system/createComponent');
require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
var useSealedState = require('reakit-utils/useSealedState');
require('reakit-utils/createOnKeyDown');
var RoverState = require('../Rover/RoverState.js');
require('../Rover/Rover.js');

function useMenuBarState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "horizontal" : _useSealedState$orien,
      _useSealedState$unsta = _useSealedState.unstable_values,
      initialValues = _useSealedState$unsta === void 0 ? {} : _useSealedState$unsta,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["orientation", "unstable_values"]);

  var _React$useState = React.useState(initialValues),
      values = _React$useState[0],
      setValues = _React$useState[1];

  var rover = RoverState.useRoverState(_rollupPluginBabelHelpers._objectSpread2({}, sealed, {
    orientation: orientation
  }));
  return _rollupPluginBabelHelpers._objectSpread2({}, rover, {
    unstable_values: values,
    unstable_update: React.useCallback(function (name, value) {
      setValues(function (vals) {
        var _objectSpread2;

        return _rollupPluginBabelHelpers._objectSpread2({}, vals, (_objectSpread2 = {}, _objectSpread2[name] = typeof value === "function" ? value(vals) : value, _objectSpread2));
      });
    }, [])
  });
}
var keys = [].concat(RoverState.useRoverState.__keys, ["unstable_values", "unstable_update"]);
useMenuBarState.__keys = keys;

exports.useMenuBarState = useMenuBarState;