'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
require('reakit-utils/usePipe');
require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
require('../Hidden/Hidden.js');
require('../Dialog/Dialog.js');
require('body-scroll-lock');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/closest');
require('react-dom');
require('../Portal/Portal.js');
require('reakit-utils/removeItemFromArray');
require('../Dialog/DialogState.js');
var createOnKeyDown = require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var Popover = require('../Popover/Popover.js');
var MenuBar = require('./MenuBar.js');
var MenuContext = require('../MenuContext-e54cf2a1.js');
require('./MenuBarState.js');
var MenuState = require('./MenuState.js');

var useMenu = createHook.createHook({
  name: "Menu",
  compose: [MenuBar.useMenuBar, Popover.usePopover],
  useState: MenuState.useMenuState,
  useOptions: function useOptions(options) {
    var parent = React.useContext(MenuContext.MenuContext);
    var parentIsMenuBar = parent && parent.role === "menubar";
    return _rollupPluginBabelHelpers._objectSpread2({
      unstable_autoFocusOnShow: !parent,
      unstable_autoFocusOnHide: !parentIsMenuBar,
      modal: false
    }, options);
  },
  useProps: function useProps(options, _ref) {
    var htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onKeyDown"]);

    var parent = React.useContext(MenuContext.MenuContext);
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

    var rovingBindings = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
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
    var parentBindings = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
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
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "menu",
      onKeyDown: useAllCallbacks.useAllCallbacks(rovingBindings, parentBindings, htmlOnKeyDown)
    }, htmlProps);
  },
  // Need to useCompose instead of useProps to overwrite `hideOnEsc`
  // because Menu prop types don't include `hideOnEsc`
  useCompose: function useCompose(options, htmlProps) {
    htmlProps = MenuBar.useMenuBar(options, htmlProps);
    return Popover.usePopover(_rollupPluginBabelHelpers._objectSpread2({}, options, {
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
