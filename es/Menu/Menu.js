import { warning } from 'reakit-utils/warning';
import { useContext, useRef, useMemo } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2, _ as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import 'reakit-utils/usePipe';
import 'reakit-utils/cx';
import '../Hidden/HiddenState.js';
import '../Hidden/Hidden.js';
import 'react-dom';
import '../Portal/Portal.js';
import '../Dialog/Dialog.js';
import 'body-scroll-lock';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/removeItemFromArray';
import '../Dialog/DialogState.js';
import { createOnKeyDown } from 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import { usePopover } from '../Popover/Popover.js';
import { useStaticMenu } from './StaticMenu.js';
import { M as MenuContext } from '../MenuContext-a9fa26a4.js';
import { useMenuState } from './MenuState.js';

var useMenu = createHook({
  name: "Menu",
  compose: [useStaticMenu, usePopover],
  useState: useMenuState,
  useOptions: function useOptions(options) {
    var parent = useContext(MenuContext);
    var parentIsHorizontal = parent && parent.orientation === "horizontal";
    return _objectSpread2({
      unstable_autoFocusOnShow: !parent,
      unstable_autoFocusOnHide: !parentIsHorizontal
    }, options);
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "onKeyDown"]);

    var parent = useContext(MenuContext);
    var ref = useRef(null);
    var isHorizontal = options.orientation === "horizontal";
    var isVertical = options.orientation === "vertical";
    var horizontalParent = parent;

    while (horizontalParent && horizontalParent.orientation !== "horizontal") {
      horizontalParent = horizontalParent.parent;
    }

    var _options$placement$sp = options.placement.split("-"),
        dir = _options$placement$sp[0];

    var rovingBindings = useMemo(function () {
      return createOnKeyDown({
        stopPropagation: function stopPropagation(event) {
          // On Esc, only stop propagation if there's no parent menu
          // Otherwise, pressing Esc should close all menus
          if (event.key === "Escape" && parent) return false;
          return true;
        },
        keyMap: function keyMap(event) {
          process.env.NODE_ENV !== "production" ? warning(!ref.current, "Menu", "Can't detect arrow keys because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
          var targetIsMenu = event.target === ref.current;
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
    }, [Boolean(parent), isHorizontal, isVertical, options.hide, options.last, options.first]);
    var parentBindings = useMemo(function () {
      return createOnKeyDown({
        stopPropagation: true,
        shouldKeyDown: function shouldKeyDown(event) {
          return Boolean(parent && ref.current && ref.current.contains(event.target));
        },
        keyMap: parent ? {
          ArrowRight: horizontalParent && dir !== "left" ? horizontalParent.next : dir === "left" && options.hide,
          ArrowLeft: horizontalParent && dir !== "right" ? horizontalParent.previous : dir === "right" && options.hide
        } : {}
      });
    }, [Boolean(parent), horizontalParent && horizontalParent.next, horizontalParent && horizontalParent.previous, dir, options.hide]);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      role: "menu",
      onKeyDown: useAllCallbacks(rovingBindings, parentBindings, htmlOnKeyDown)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    htmlProps = useStaticMenu(options, htmlProps);
    return usePopover(_objectSpread2({}, options, {
      modal: false,
      unstable_portal: false,
      unstable_orphan: false,
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
