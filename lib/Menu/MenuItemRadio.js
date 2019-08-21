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
require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('reakit-utils/useUpdateEffect');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('../Radio/RadioState.js');
var Radio = require('../Radio/Radio.js');
require('popper.js');
require('../Popover/PopoverState.js');
require('../MenuContext-8a7a2ea8.js');
var MenuState = require('./MenuState.js');
var MenuItem = require('./MenuItem.js');

var useMenuItemRadio = createHook.createHook({
  name: "MenuItemRadio",
  compose: [MenuItem.useMenuItem, Radio.useRadio],
  useState: MenuState.useMenuState,
  keys: ["name"],
  useOptions: function useOptions(options) {
    var setState = React.useCallback(function (value) {
      return options.unstable_update(options.name, value);
    }, [options.unstable_update, options.name]);
    return _rollupPluginBabelHelpers._objectSpread2({}, options, {
      state: options.unstable_values[options.name],
      setState: setState
    });
  },
  useProps: function useProps(_, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "menuitemradio"
    }, htmlProps);
  }
});
var MenuItemRadio = createComponent.createComponent({
  as: "button",
  useHook: useMenuItemRadio
});

exports.MenuItemRadio = MenuItemRadio;
exports.useMenuItemRadio = useMenuItemRadio;
