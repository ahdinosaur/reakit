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

function useRadioState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      initialCurrentValue = _useSealedState.state,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? true : _useSealedState$loop,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["state", "loop"]);

  var _React$useState = React.useState(initialCurrentValue),
      state = _React$useState[0],
      setState = _React$useState[1];

  var rover = RoverState.useRoverState(_rollupPluginBabelHelpers._objectSpread2({}, sealed, {
    loop: loop
  }));
  return _rollupPluginBabelHelpers._objectSpread2({}, rover, {
    state: state,
    setState: setState
  });
}
var keys = [].concat(RoverState.useRoverState.__keys, ["state", "setState"]);
useRadioState.__keys = keys;

exports.useRadioState = useRadioState;