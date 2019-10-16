'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
require('../MenuContext-e54cf2a1.js');
require('./MenuBarState.js');
var MenuState = require('./MenuState.js');

var useMenuGroup = createHook.createHook({
  name: "MenuGroup",
  compose: Box.useBox,
  useState: MenuState.useMenuState,
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "group"
    }, htmlProps);
  }
});
var MenuGroup = createComponent.createComponent({
  as: "div",
  useHook: useMenuGroup
});

exports.MenuGroup = MenuGroup;
exports.useMenuGroup = useMenuGroup;