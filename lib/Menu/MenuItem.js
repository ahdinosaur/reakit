'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('reakit-utils/useUpdateEffect');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
var Rover = require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
require('../MenuContext-8a7a2ea8.js');
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
    var htmlRef = _ref.ref,
        htmlOnMouseOver = _ref.onMouseOver,
        htmlOnMouseOut = _ref.onMouseOut,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "onMouseOver", "onMouseOut"]);

    var ref = React.useRef(null);
    var onMouseOver = React.useCallback(function () {
      if (options.orientation !== "horizontal" && !isTouchDevice()) {
        if (!ref.current) {
          process.env.NODE_ENV !== "production" ? warning.warning(true, "MenuItem", "Can't respond to mouse over on `MenuItem` because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
          return;
        }

        ref.current.focus();
      }
    }, [options.orientation]);
    var onMouseOut = React.useCallback(function () {
      if (ref.current) {
        // Ignores disclosure
        if (!ref.current.hasAttribute("aria-controls") || ref.current.getAttribute("aria-expanded") !== "true") {
          ref.current.blur();
        }

        var menu = ref.current.closest("[role=menu],[role=menubar]");

        if (menu) {
          var nestedMenu = menu.querySelector("[role=menu]:not([hidden]),[role=menubar]:not([hidden])");

          if (!nestedMenu && !isTouchDevice()) {
            options.move(null);
            menu.focus();
          }
        }
      }
    }, [options.move]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
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
