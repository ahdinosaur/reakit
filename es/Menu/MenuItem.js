import 'reakit-utils/warning';
import { useContext, useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import { useRover } from '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-3392c089.js';
import './MenuBarState.js';
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
    var htmlOnMouseOver = _ref.onMouseOver,
        htmlOnMouseOut = _ref.onMouseOut,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onMouseOver", "onMouseOut"]);

    var menu = useContext(MenuContext);
    var onMouseOver = useCallback(function (event) {
      if (!event.currentTarget) return;
      if (isTouchDevice()) return;
      if (menu && menu.role === "menubar") return;
      var menuItem = event.currentTarget;
      menuItem.focus();
    }, [options.orientation]);
    var onMouseOut = useCallback(function (event) {
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
    return _objectSpread2({
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
