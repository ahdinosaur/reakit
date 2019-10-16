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
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
var PopoverState = require('../Popover/PopoverState.js');
var MenuContext = require('../MenuContext-e54cf2a1.js');
var MenuBarState = require('./MenuBarState.js');

function useMenuState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "vertical" : _useSealedState$orien,
      _useSealedState$gutte = _useSealedState.gutter,
      gutter = _useSealedState$gutte === void 0 ? 0 : _useSealedState$gutte,
      sealed = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_useSealedState, ["orientation", "gutter"]);

  var parent = React.useContext(MenuContext.MenuContext);
  var placement = sealed.placement || (parent && parent.orientation === "vertical" ? "right-start" : "bottom-start");
  var menuBar = MenuBarState.useMenuBarState(_rollupPluginBabelHelpers._objectSpread2({}, sealed, {
    orientation: orientation
  }));
  var popover = PopoverState.usePopoverState(_rollupPluginBabelHelpers._objectSpread2({}, sealed, {
    placement: placement,
    gutter: gutter
  }));
  React.useEffect(function () {
    if (!popover.visible) {
      menuBar.unstable_reset();
    }
  }, [popover.visible]);
  return _rollupPluginBabelHelpers._objectSpread2({}, menuBar, {}, popover);
}
var keys = [].concat(MenuBarState.useMenuBarState.__keys, PopoverState.usePopoverState.__keys);
useMenuState.__keys = keys;

exports.useMenuState = useMenuState;
