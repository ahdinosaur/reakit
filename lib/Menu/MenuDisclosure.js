'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('../Button/Button.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
require('../Hidden/HiddenDisclosure.js');
require('../Dialog/DialogDisclosure.js');
var createOnKeyDown = require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var MenuContext = require('../MenuContext-e54cf2a1.js');
require('./MenuBarState.js');
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
        dir = _options$placement$sp[0];

    var hasParent = Boolean(parent);
    var parentIsMenuBar = parent && parent.role === "menubar";
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
            Enter: hasParent && first,
            " ": hasParent && first,
            ArrowUp: dir === "top" || dir === "bottom" ? options.last : false,
            ArrowRight: dir === "right" && first,
            ArrowDown: dir === "bottom" || dir === "top" ? first : false,
            ArrowLeft: dir === "left" && first
          };
        }
      });
    }, [dir, hasParent, options.show, options.hide, options.first, options.last]);
    var onFocus = React.useCallback(function () {
      if (parentIsMenuBar) {
        setHasShownOnFocus(true);
        options.show();
      }
    }, [parentIsMenuBar, setHasShownOnFocus, options.show]); // Restores hasShownOnFocus

    React.useEffect(function () {
      if (hasShownOnFocus) {
        setTimeout(function () {
          return setHasShownOnFocus(false);
        }, 200);
      }
    }, [hasShownOnFocus]);
    var onMouseOver = React.useCallback(function (event) {
      // MenuDisclosure's don't do anything on mouse over when they aren't
      // cointained within a Menu/MenuBar
      if (!parent) return;
      var disclosure = event.currentTarget;

      if (parentIsMenuBar) {
        // if MenuDisclosure is an item inside a MenuBar, it'll only open
        // if there's already another sibling expanded MenuDisclosure
        var subjacentOpenMenu = parent.ref.current && parent.ref.current.querySelector("[aria-expanded='true']");

        if (subjacentOpenMenu) {
          disclosure.focus();
        }
      } else {
        // If it's in a Menu, open after a short delay
        // TODO: Make the delay a prop?
        setTimeout(function () {
          if (disclosure.contains(document.activeElement)) {
            options.show();

            if (document.activeElement !== disclosure) {
              disclosure.focus();
            }
          }
        }, 200);
      }
    }, [parent, parentIsMenuBar, options.show]);
    var onClick = React.useCallback(function () {
      if (hasParent && (!parentIsMenuBar || hasShownOnFocus)) {
        options.show();
      } else {
        options.toggle();
      }
    }, [hasParent, parentIsMenuBar, hasShownOnFocus, options.show, options.toggle]);
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
