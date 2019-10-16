'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
var useId = require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
var hasFocusWithin = require('reakit-utils/hasFocusWithin');
var Tabbable = require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
var createOnKeyDown = require('reakit-utils/createOnKeyDown');
var RoverState = require('./RoverState.js');

var useRover = createHook.createHook({
  name: "Rover",
  compose: Tabbable.useTabbable,
  useState: RoverState.useRoverState,
  keys: ["stopId"],
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlTabIndex = _ref.tabIndex,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "tabIndex", "onKeyDown"]);

    var ref = React.useRef(null);
    var id = useId.useId("rover-");
    var stopId = options.stopId || htmlProps.id || id;
    var trulyDisabled = options.disabled && !options.focusable;
    var noFocused = options.currentId == null;
    var focused = options.currentId === stopId;
    var isFirst = (options.stops || [])[0] && options.stops[0].id === stopId;
    var shouldTabIndex = focused || isFirst && noFocused;
    React.useEffect(function () {
      if (trulyDisabled) return undefined;
      options.register && options.register(stopId, ref);
      return function () {
        return options.unregister && options.unregister(stopId);
      };
    }, [stopId, trulyDisabled, options.register, options.unregister]);
    React.useEffect(function () {
      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning.warning(true, "Rover", "Can't focus rover component because `ref` wasn't passed to component.", "See https://reakit.io/docs/rover") : void 0;
        return;
      }

      if (options.unstable_moves && focused && !hasFocusWithin.hasFocusWithin(ref.current)) {
        ref.current.focus();
      }
    }, [focused, options.unstable_moves]);
    React.useEffect(function () {
      if (!ref.current) return undefined;

      var onFocus = function onFocus() {
        return options.move(stopId);
      }; // https://github.com/facebook/react/issues/11387#issuecomment-524113945


      ref.current.addEventListener("focus", onFocus, true);
      return function () {
        if (ref.current) {
          ref.current.removeEventListener("focus", onFocus, true);
        }
      };
    }, [options.move, stopId]);
    var onKeyDown = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
        onKeyDown: htmlOnKeyDown,
        stopPropagation: true,
        // Ignore portals
        shouldKeyDown: function shouldKeyDown(event) {
          return (// https://github.com/facebook/react/issues/11387
            event.currentTarget.contains(event.target)
          );
        },
        keyMap: {
          ArrowUp: options.orientation !== "horizontal" && options.previous,
          ArrowRight: options.orientation !== "vertical" && options.next,
          ArrowDown: options.orientation !== "horizontal" && options.next,
          ArrowLeft: options.orientation !== "vertical" && options.previous,
          Home: options.first,
          End: options.last,
          PageUp: options.first,
          PageDown: options.last
        }
      });
    }, [htmlOnKeyDown, options.orientation, options.previous, options.next, options.first, options.last]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      id: stopId,
      tabIndex: shouldTabIndex ? htmlTabIndex : -1,
      onKeyDown: onKeyDown
    }, htmlProps);
  }
});
var Rover = createComponent.createComponent({
  as: "button",
  useHook: useRover
});

exports.Rover = Rover;
exports.useRover = useRover;
