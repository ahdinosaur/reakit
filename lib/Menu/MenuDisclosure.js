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
require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('../Hidden/HiddenState.js');
require('reakit-utils/useUpdateEffect');
require('../Dialog/DialogState.js');
require('../Hidden/HiddenDisclosure.js');
require('../Dialog/DialogDisclosure.js');
var createOnKeyDown = require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var MenuContext = require('../MenuContext-8a7a2ea8.js');
var MenuState = require('./MenuState.js');
var PopoverDisclosure = require('../Popover/PopoverDisclosure.js');

var noop = function noop() {};

var useMenuDisclosure = createHook.createHook({
  name: "MenuDisclosure",
  compose: PopoverDisclosure.usePopoverDisclosure,
  useState: MenuState.useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnClick = _ref.onClick,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnFocus = _ref.onFocus,
        htmlOnMouseOver = _ref.onMouseOver,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "onClick", "onKeyDown", "onFocus", "onMouseOver"]);

    var parent = React.useContext(MenuContext.MenuContext);
    var ref = React.useRef(null); // This avoids race condition between focus and click.
    // On some browsers, focus is triggered right before click.
    // So we use it to disable toggling.

    var _React$useState = React.useState(false),
        hasShownOnFocus = _React$useState[0],
        setHasShownOnFocus = _React$useState[1];

    var _options$placement$sp = options.placement.split("-"),
        dir = _options$placement$sp[0]; // Restores hasShownOnFocus


    React.useEffect(function () {
      if (hasShownOnFocus) {
        setTimeout(function () {
          return setHasShownOnFocus(false);
        }, 200);
      }
    }, [hasShownOnFocus]);
    var onKeyDown = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
        stopPropagation: function stopPropagation(event) {
          return event.key !== "Escape";
        },
        onKey: options.show,
        keyMap: function keyMap() {
          // prevents scroll jump
          var first = function first() {
            return setTimeout(options.first);
          };

          return {
            Escape: options.hide,
            Enter: parent && first,
            " ": parent && first,
            ArrowUp: dir === "top" || dir === "bottom" ? options.last : false,
            ArrowRight: dir === "right" && first,
            ArrowDown: dir === "bottom" || dir === "top" ? first : false,
            ArrowLeft: dir === "left" && first
          };
        }
      });
    }, [dir, Boolean(parent), options.show, options.hide, options.first, options.last]);
    var onFocus = React.useCallback(function () {
      if (parent && parent.orientation === "horizontal") {
        setHasShownOnFocus(true);
        options.show();
      }
    }, [parent && parent.orientation, setHasShownOnFocus, options.show]);
    var onMouseOver = React.useCallback(function () {
      if (!parent) return;

      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning.warning(true, "MenuDisclosure", "Can't respond to mouse over on `MenuDisclosure` because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
        return;
      }

      var parentIsHorizontal = parent.orientation === "horizontal";

      if (!parentIsHorizontal) {
        setTimeout(function () {
          if (ref.current && ref.current.contains(document.activeElement)) {
            options.show();
            ref.current.focus();
          }
        }, 200);
      } else {
        var parentMenu = ref.current.closest("[role=menu],[role=menubar]");
        var subjacentOpenMenu = parentMenu && parentMenu.querySelector("[role=menu]:not([hidden])");

        if (subjacentOpenMenu) {
          ref.current.focus();
        }
      }
    }, [parent && parent.orientation, options.show]);
    var onClick = React.useCallback(function () {
      if (parent && (parent.orientation !== "horizontal" || hasShownOnFocus)) {
        options.show();
      } else {
        options.toggle();
      }
    }, [parent && parent.orientation, hasShownOnFocus, options.show, options.toggle]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      "aria-haspopup": "menu",
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick),
      onKeyDown: useAllCallbacks.useAllCallbacks(onKeyDown, htmlOnKeyDown),
      onFocus: useAllCallbacks.useAllCallbacks(onFocus, htmlOnFocus),
      onMouseOver: useAllCallbacks.useAllCallbacks(onMouseOver, htmlOnMouseOver)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    // Toggling is handled by MenuDisclosure
    return PopoverDisclosure.usePopoverDisclosure(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      toggle: noop
    }), htmlProps);
  }
});
var MenuDisclosure = createComponent.createComponent({
  as: "button",
  useHook: useMenuDisclosure
});

exports.MenuDisclosure = MenuDisclosure;
exports.useMenuDisclosure = useMenuDisclosure;
