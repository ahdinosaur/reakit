import { warning } from 'reakit-utils/warning';
import { useRef, useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import 'reakit-utils/useUpdateEffect';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import { useRover } from '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import '../MenuContext-a9fa26a4.js';
import { useMenuState } from './MenuState.js';

// TODO: Find a better implementation
function isTouchDevice() {
  if (process.env.NODE_ENV === "test" || typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

var useMenuItem = createHook({
  name: "MenuItem",
  compose: useRover,
  useState: useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnMouseOver = _ref.onMouseOver,
        htmlOnMouseOut = _ref.onMouseOut,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "onMouseOver", "onMouseOut"]);

    var ref = useRef(null);
    var onMouseOver = useCallback(function () {
      if (options.orientation !== "horizontal" && !isTouchDevice()) {
        if (!ref.current) {
          process.env.NODE_ENV !== "production" ? warning(true, "MenuItem", "Can't respond to mouse over on `MenuItem` because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
          return;
        }

        ref.current.focus();
      }
    }, [options.orientation]);
    var onMouseOut = useCallback(function () {
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
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      role: "menuitem",
      onMouseOver: useAllCallbacks(onMouseOver, htmlOnMouseOver),
      onMouseOut: useAllCallbacks(onMouseOut, htmlOnMouseOut)
    }, htmlProps);
  }
});
var MenuItem = createComponent({
  as: "button",
  useHook: useMenuItem
});

export { MenuItem, useMenuItem };
