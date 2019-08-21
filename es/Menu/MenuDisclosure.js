import { warning } from 'reakit-utils/warning';
import { useContext, useRef, useState, useEffect, useMemo, useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import '../Button/Button.js';
import 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import 'reakit-utils/useUpdateEffect';
import '../Dialog/DialogState.js';
import '../Hidden/HiddenDisclosure.js';
import '../Dialog/DialogDisclosure.js';
import { createOnKeyDown } from 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-a9fa26a4.js';
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
        dir = _options$placement$sp[0]; // Restores hasShownOnFocus


    useEffect(function () {
      if (hasShownOnFocus) {
        setTimeout(function () {
          return setHasShownOnFocus(false);
        }, 200);
      }
    }, [hasShownOnFocus]);
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
    var onFocus = useCallback(function () {
      if (parent && parent.orientation === "horizontal") {
        setHasShownOnFocus(true);
        options.show();
      }
    }, [parent && parent.orientation, setHasShownOnFocus, options.show]);
    var onMouseOver = useCallback(function () {
      if (!parent) return;

      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning(true, "MenuDisclosure", "Can't respond to mouse over on `MenuDisclosure` because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
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
    var onClick = useCallback(function () {
      if (parent && (parent.orientation !== "horizontal" || hasShownOnFocus)) {
        options.show();
      } else {
        options.toggle();
      }
    }, [parent && parent.orientation, hasShownOnFocus, options.show, options.toggle]);
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
