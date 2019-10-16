import 'reakit-utils/warning';
import { useContext, useRef, useState, useMemo, useCallback, useEffect } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import '../Hidden/HiddenDisclosure.js';
import '../Dialog/DialogDisclosure.js';
import { createOnKeyDown } from 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-3392c089.js';
import './MenuBarState.js';
import { useMenuState } from './MenuState.js';
import { usePopoverDisclosure } from '../Popover/PopoverDisclosure.js';

var noop = function noop() {};

var useMenuDisclosure = createHook({
  name: "MenuDisclosure",
  compose: usePopoverDisclosure,
  useState: useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnClick = _ref.onClick,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnFocus = _ref.onFocus,
        htmlOnMouseOver = _ref.onMouseOver,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "onClick", "onKeyDown", "onFocus", "onMouseOver"]);

    var parent = useContext(MenuContext);
    var ref = useRef(null); // This avoids race condition between focus and click.
    // On some browsers, focus is triggered right before click.
    // So we use it to disable toggling.

    var _React$useState = useState(false),
        hasShownOnFocus = _React$useState[0],
        setHasShownOnFocus = _React$useState[1];

    var _options$placement$sp = options.placement.split("-"),
        dir = _options$placement$sp[0];

    var hasParent = Boolean(parent);
    var parentIsMenuBar = parent && parent.role === "menubar";
    var onKeyDown = useMemo(function () {
      return createOnKeyDown({
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
    var onFocus = useCallback(function () {
      if (parentIsMenuBar) {
        setHasShownOnFocus(true);
        options.show();
      }
    }, [parentIsMenuBar, setHasShownOnFocus, options.show]); // Restores hasShownOnFocus

    useEffect(function () {
      if (hasShownOnFocus) {
        setTimeout(function () {
          return setHasShownOnFocus(false);
        }, 200);
      }
    }, [hasShownOnFocus]);
    var onMouseOver = useCallback(function (event) {
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
    var onClick = useCallback(function () {
      if (hasParent && (!parentIsMenuBar || hasShownOnFocus)) {
        options.show();
      } else {
        options.toggle();
      }
    }, [hasParent, parentIsMenuBar, hasShownOnFocus, options.show, options.toggle]);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      "aria-haspopup": "menu",
      onClick: useAllCallbacks(onClick, htmlOnClick),
      onKeyDown: useAllCallbacks(onKeyDown, htmlOnKeyDown),
      onFocus: useAllCallbacks(onFocus, htmlOnFocus),
      onMouseOver: useAllCallbacks(onMouseOver, htmlOnMouseOver)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    // Toggling is handled by MenuDisclosure
    return usePopoverDisclosure(_objectSpread2({}, options, {
      toggle: noop
    }), htmlProps);
  }
});
var MenuDisclosure = createComponent({
  as: "button",
  useHook: useMenuDisclosure
});

export { MenuDisclosure, useMenuDisclosure };
