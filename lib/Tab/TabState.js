'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
var useId = require('reakit-utils/useId');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var useSealedState = require('reakit-utils/useSealedState');
var RoverState = require('../Rover/RoverState.js');

function useTabState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var defaultId = useId.useId("tab-");

  var _useSealedState = useSealedState.useSealedState(initialState),
      _useSealedState$unsta = _useSealedState.unstable_baseId,
      baseId = _useSealedState$unsta === void 0 ? defaultId : _useSealedState$unsta,
      _useSealedState$selec = _useSealedState.selectedId,
      sealedSelectedId = _useSealedState$selec === void 0 ? null : _useSealedState$selec,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? true : _useSealedState$loop,
      _useSealedState$manua = _useSealedState.manual,
      manual = _useSealedState$manua === void 0 ? false : _useSealedState$manua,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["unstable_baseId", "selectedId", "loop", "manual"]);

  var _React$useState = React.useState(sealedSelectedId),
      selectedId = _React$useState[0],
      select = _React$useState[1];

  var rover = RoverState.useRoverState(_rollupPluginBabelHelpers._objectSpread2({
    loop: loop,
    currentId: selectedId
  }, sealed));
  return _rollupPluginBabelHelpers._objectSpread2({}, rover, {
    unstable_baseId: baseId,
    selectedId: selectedId,
    manual: manual,
    select: select
  });
}
var keys = [].concat(RoverState.useRoverState.__keys, ["unstable_baseId", "selectedId", "select", "manual"]);
useTabState.__keys = keys;

exports.useTabState = useTabState;
