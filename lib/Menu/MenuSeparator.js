'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('reakit-utils/useUpdateEffect');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
require('../MenuContext-8a7a2ea8.js');
var MenuState = require('./MenuState.js');
var Separator = require('../Separator/Separator.js');

var useMenuSeparator = createHook.createHook({
  name: "MenuSeparator",
  compose: Separator.useSeparator,
  useState: MenuState.useMenuState,
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "vertical" : _ref$orientation,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      orientation: orientation === "vertical" ? "horizontal" : "vertical"
    }, options);
  }
});
var MenuSeparator = createComponent.createComponent({
  as: "hr",
  useHook: useMenuSeparator
});

exports.MenuSeparator = MenuSeparator;
exports.useMenuSeparator = useMenuSeparator;
