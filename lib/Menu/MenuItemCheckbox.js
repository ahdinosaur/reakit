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
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/removeIndexFromArray');
require('reakit-utils/useSealedState');
require('../Checkbox/CheckboxState.js');
var Checkbox = require('../Checkbox/Checkbox.js');
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
var MenuItem = require('./MenuItem.js');

var useMenuItemCheckbox = createHook.createHook({
  name: "MenuItemCheckbox",
  compose: [MenuItem.useMenuItem, Checkbox.useCheckbox],
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
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "menuitemcheckbox",
      name: options.name
    }, htmlProps);
  }
});
var MenuItemCheckbox = createComponent.createComponent({
  as: "button",
  useHook: useMenuItemCheckbox
});

exports.MenuItemCheckbox = MenuItemCheckbox;
exports.useMenuItemCheckbox = useMenuItemCheckbox;
