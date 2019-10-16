'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var useSealedState = require('reakit-utils/useSealedState');
var RoverState = require('../Rover/RoverState.js');

function useToolbarState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "horizontal" : _useSealedState$orien,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["orientation"]);

  return RoverState.useRoverState(_rollupPluginBabelHelpers._objectSpread2({
    orientation: orientation
  }, sealed));
}
var keys = [].concat(RoverState.useRoverState.__keys);
useToolbarState.__keys = keys;

exports.useToolbarState = useToolbarState;