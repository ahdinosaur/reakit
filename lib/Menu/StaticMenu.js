'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
var usePipe = require('reakit-utils/usePipe');
require('../Hidden/HiddenState.js');
require('reakit-utils/useUpdateEffect');
require('../Dialog/DialogState.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('popper.js');
require('../Popover/PopoverState.js');
var MenuContext = require('../MenuContext-8a7a2ea8.js');
var MenuState = require('./MenuState.js');

function useShortcuts(menuRef, _ref, timeout) {
  var stops = _ref.stops,
      move = _ref.move;

  if (timeout === void 0) {
    timeout = 500;
  }

  var _React$useState = React.useState(""),
      keys = _React$useState[0],
      setKeys = _React$useState[1];

  React.useEffect(function () {
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
  React.useEffect(function () {
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

var useStaticMenu = createHook.createHook({
  name: "StaticMenu",
  compose: Box.useBox,
  useState: MenuState.useMenuState,
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlWrap = _ref.unstable_wrap,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "unstable_wrap"]);

    var ref = React.useRef(null);
    var parent = React.useContext(MenuContext.MenuContext);
    var providerValue = React.useMemo(function () {
      return {
        orientation: options.orientation,
        next: options.next,
        previous: options.previous,
        parent: parent
      };
    }, [options.orientation, options.next, options.previous, parent]);
    useShortcuts(ref, options);
    var wrap = React.useCallback(function (children) {
      return React.createElement(MenuContext.MenuContext.Provider, {
        value: providerValue
      }, children);
    }, [providerValue]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      role: options.orientation === "horizontal" ? "menubar" : "menu",
      "aria-orientation": options.orientation,
      unstable_wrap: usePipe.usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var StaticMenu = createComponent.createComponent({
  as: "div",
  useHook: useStaticMenu,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"] && props.role !== "menubar", "Menu", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/menu") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.StaticMenu = StaticMenu;
exports.useStaticMenu = useStaticMenu;
