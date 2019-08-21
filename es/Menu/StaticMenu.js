import { warning } from 'reakit-utils/warning';
import { useState, useEffect, useRef, useContext, useMemo, useCallback, createElement } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import { usePipe } from 'reakit-utils/usePipe';
import '../Hidden/HiddenState.js';
import 'reakit-utils/useUpdateEffect';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { M as MenuContext } from '../MenuContext-a9fa26a4.js';
import { useMenuState } from './MenuState.js';

function useShortcuts(menuRef, _ref, timeout) {
  var stops = _ref.stops,
      move = _ref.move;

  if (timeout === void 0) {
    timeout = 500;
  }

  var _React$useState = useState(""),
      keys = _React$useState[0],
      setKeys = _React$useState[1];

  useEffect(function () {
    if (!keys) return undefined;
    var timeoutId = setTimeout(function () {
      return setKeys("");
    }, timeout);
    var stop = stops.find(function (s) {
      return Boolean(s.ref.current && s.ref.current.textContent && s.ref.current.textContent.toLowerCase().startsWith(keys));
    });

    if (stop) {
      move(stop.id);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [keys, stops, move, timeout]);
  useEffect(function () {
    var menu = menuRef.current;
    if (!menu) return undefined;

    var onKeyDown = function onKeyDown(event) {
      if (event.metaKey || event.altKey || event.shiftKey || event.ctrlKey) {
        return;
      }

      var target = event.target;
      var role = target.getAttribute("role");
      var targetIsMenu = target === menu;
      var targetIsMenuItem = role && role.indexOf("menuitem") >= 0 && target.closest("[role=menu],[role=menubar]") === menu;
      if (!targetIsMenu && !targetIsMenuItem) return;

      if (/^[a-z0-9_-]$/i.test(event.key)) {
        event.stopPropagation();
        event.preventDefault();
        setKeys(function (k) {
          return "" + k + event.key;
        });
      }
    };

    menu.addEventListener("keydown", onKeyDown);
    return function () {
      return menu.removeEventListener("keydown", onKeyDown);
    };
  }, [menuRef, setKeys]);
}

var useStaticMenu = createHook({
  name: "StaticMenu",
  compose: useBox,
  useState: useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlWrap = _ref.unstable_wrap,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "unstable_wrap"]);

    var ref = useRef(null);
    var parent = useContext(MenuContext);
    var providerValue = useMemo(function () {
      return {
        orientation: options.orientation,
        next: options.next,
        previous: options.previous,
        parent: parent
      };
    }, [options.orientation, options.next, options.previous, parent]);
    useShortcuts(ref, options);
    var wrap = useCallback(function (children) {
      return createElement(MenuContext.Provider, {
        value: providerValue
      }, children);
    }, [providerValue]);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      role: options.orientation === "horizontal" ? "menubar" : "menu",
      "aria-orientation": options.orientation,
      unstable_wrap: usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var StaticMenu = createComponent({
  as: "div",
  useHook: useStaticMenu,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"] && props.role !== "menubar", "Menu", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/menu") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { StaticMenu, useStaticMenu };
