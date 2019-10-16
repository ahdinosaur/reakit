import { warning } from 'reakit-utils/warning';
import { useContext, useMemo } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2, _ as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import 'reakit-utils/usePipe';
import 'reakit-utils/cx';
import 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import '../Hidden/Hidden.js';
import '../Dialog/Dialog.js';
import 'body-scroll-lock';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/closest';
import 'react-dom';
import '../Portal/Portal.js';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import { createOnKeyDown } from 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { usePopover } from '../Popover/Popover.js';
import { useMenuBar } from './MenuBar.js';
import { M as MenuContext } from '../MenuContext-3392c089.js';
import './MenuBarState.js';
import { useMenuState } from './MenuState.js';

var useMenu = createHook({
  name: "Menu",
  compose: [useMenuBar, usePopover],
  useState: useMenuState,
  useOptions: function useOptions(options) {
    var parent = useContext(MenuContext);
    var parentIsMenuBar = parent && parent.role === "menubar";
    return _objectSpread2({
      unstable_autoFocusOnShow: !parent,
      unstable_autoFocusOnHide: !parentIsMenuBar,
      modal: false
    }, options);
  },
  useProps: function useProps(options, _ref) {
    var htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onKeyDown"]);

    var parent = useContext(MenuContext);
    var isHorizontal = options.orientation === "horizontal";
    var isVertical = options.orientation === "vertical";
    var hasParent = Boolean(parent);
    var ancestorMenuBar = parent;

    while (ancestorMenuBar && ancestorMenuBar.role !== "menubar") {
      ancestorMenuBar = ancestorMenuBar.parent;
    }

    var _ref2 = ancestorMenuBar || {},
        next = _ref2.next,
        previous = _ref2.previous,
        orientation = _ref2.orientation;

    var ancestorIsHorizontal = orientation === "horizontal";

    var _split = (options.placement || "").split("-"),
        dir = _split[0];

    var rovingBindings = useMemo(function () {
      return createOnKeyDown({
        stopPropagation: function stopPropagation(event) {
          // On Esc, only stop propagation if there's no parent menu
          // Otherwise, pressing Esc should close all menus
          if (event.key === "Escape" && hasParent) return false;
          return true;
        },
        keyMap: function keyMap(event) {
          var targetIsMenu = event.target === event.currentTarget;
          return {
            Escape: options.hide,
            ArrowUp: targetIsMenu && !isHorizontal && options.last,
            ArrowRight: targetIsMenu && !isVertical && options.first,
            ArrowDown: targetIsMenu && !isHorizontal && options.first,
            ArrowLeft: targetIsMenu && !isVertical && options.last,
            Home: targetIsMenu && options.first,
            End: targetIsMenu && options.last,
            PageUp: targetIsMenu && options.first,
            PageDown: targetIsMenu && options.last
          };
        }
      });
    }, [hasParent, isHorizontal, isVertical, options.hide, options.last, options.first]);
    var parentBindings = useMemo(function () {
      return createOnKeyDown({
        stopPropagation: true,
        shouldKeyDown: function shouldKeyDown(event) {
          return Boolean( // https://github.com/facebook/react/issues/11387
          hasParent && event.currentTarget.contains(event.target));
        },
        keyMap: hasParent ? {
          ArrowRight: ancestorIsHorizontal && dir !== "left" ? next : dir === "left" && options.hide,
          ArrowLeft: ancestorIsHorizontal && dir !== "right" ? previous : dir === "right" && options.hide
        } : {}
      });
    }, [hasParent, ancestorIsHorizontal, next, previous, dir, options.hide]);
    return _objectSpread2({
      role: "menu",
      onKeyDown: useAllCallbacks(rovingBindings, parentBindings, htmlOnKeyDown)
    }, htmlProps);
  },
  // Need to useCompose instead of useProps to overwrite `hideOnEsc`
  // because Menu prop types don't include `hideOnEsc`
  useCompose: function useCompose(options, htmlProps) {
    htmlProps = useMenuBar(options, htmlProps);
    return usePopover(_objectSpread2({}, options, {
      hideOnEsc: false
    }), htmlProps);
  }
});
var Menu = createComponent({
  as: "div",
  useHook: useMenu,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "Menu", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/menu") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { Menu, useMenu };
