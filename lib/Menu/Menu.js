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
var useCreateElement = require('reakit-system/useCreateElement');
require('reakit-utils/usePipe');
require('reakit-utils/cx');
require('../Hidden/HiddenState.js');
require('../Hidden/Hidden.js');
require('react-dom');
require('../Portal/Portal.js');
require('../Dialog/Dialog.js');
require('body-scroll-lock');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
var createOnKeyDown = require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var Popover = require('../Popover/Popover.js');
var StaticMenu = require('./StaticMenu.js');
var MenuContext = require('../MenuContext-8a7a2ea8.js');
var MenuState = require('./MenuState.js');

var useMenu = createHook.createHook({
  name: "Menu",
  compose: [StaticMenu.useStaticMenu, Popover.usePopover],
  useState: MenuState.useMenuState,
  useOptions: function useOptions(options) {
    var parent = React.useContext(MenuContext.MenuContext);
    var parentIsHorizontal = parent && parent.orientation === "horizontal";
    return _rollupPluginBabelHelpers._objectSpread2({
      unstable_autoFocusOnShow: !parent,
      unstable_autoFocusOnHide: !parentIsHorizontal
    }, options);
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "onKeyDown"]);

    var parent = React.useContext(MenuContext.MenuContext);
    var ref = React.useRef(null);
    var isHorizontal = options.orientation === "horizontal";
    var isVertical = options.orientation === "vertical";
    var horizontalParent = parent;

    while (horizontalParent && horizontalParent.orientation !== "horizontal") {
      horizontalParent = horizontalParent.parent;
    }

    var _options$placement$sp = options.placement.split("-"),
        dir = _options$placement$sp[0];

    var rovingBindings = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
        stopPropagation: function stopPropagation(event) {
          // On Esc, only stop propagation if there's no parent menu
          // Otherwise, pressing Esc should close all menus
          if (event.key === "Escape" && parent) return false;
          return true;
        },
        keyMap: function keyMap(event) {
          process.env.NODE_ENV !== "production" ? warning.warning(!ref.current, "Menu", "Can't detect arrow keys because `ref` wasn't passed to component.", "See https://reakit.io/docs/menu") : void 0;
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
    var parentBindings = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
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
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      role: "menu",
      onKeyDown: useAllCallbacks.useAllCallbacks(rovingBindings, parentBindings, htmlOnKeyDown)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    htmlProps = StaticMenu.useStaticMenu(options, htmlProps);
    return Popover.usePopover(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      modal: false,
      unstable_portal: false,
      unstable_orphan: false,
      hideOnEsc: false
    }), htmlProps);
  }
});
var Menu = createComponent.createComponent({
  as: "div",
  useHook: useMenu,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "Menu", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/menu") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.Menu = Menu;
exports.useMenu = useMenu;
