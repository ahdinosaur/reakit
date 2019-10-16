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
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
var Rover = require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var MenuContext = require('../MenuContext-e54cf2a1.js');
require('./MenuBarState.js');
var MenuState = require('./MenuState.js');

// TODO: Find a better implementation
function isTouchDevice() {
  if (process.env.NODE_ENV === "test" || typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

var useMenuItem = createHook.createHook({
  name: "MenuItem",
  compose: Rover.useRover,
  useState: MenuState.useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlOnMouseOver = _ref.onMouseOver,
        htmlOnMouseOut = _ref.onMouseOut,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onMouseOver", "onMouseOut"]);

    var menu = React.useContext(MenuContext.MenuContext);
    var onMouseOver = React.useCallback(function (event) {
      if (!event.currentTarget) return;
      if (isTouchDevice()) return;
      if (menu && menu.role === "menubar") return;
      var menuItem = event.currentTarget;
      menuItem.focus();
    }, [options.orientation]);
    var onMouseOut = React.useCallback(function (event) {
      if (!event.currentTarget || !menu) return;
      var menuItem = event.currentTarget; // Blur items on mouse out
      // Ignore disclosure, otherwise sub menu will close when blurring

      if (!menuItem.hasAttribute("aria-controls") || menuItem.getAttribute("aria-expanded") !== "true") {
        menuItem.blur();
      } // Move focus onto menu after blurring


      if (document.activeElement === document.body && menu.ref.current && !isTouchDevice()) {
        menu.ref.current.focus();
      }
    }, [options.move]);
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "menuitem",
      onMouseOver: useAllCallbacks.useAllCallbacks(onMouseOver, htmlOnMouseOver),
      onMouseOut: useAllCallbacks.useAllCallbacks(onMouseOut, htmlOnMouseOut)
    }, htmlProps);
  }
});
var MenuItem = createComponent.createComponent({
  as: "button",
  useHook: useMenuItem
});

exports.MenuItem = MenuItem;
exports.useMenuItem = useMenuItem;
