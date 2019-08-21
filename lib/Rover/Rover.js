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
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
var Tabbable = require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
var useUpdateEffect = require('reakit-utils/useUpdateEffect');
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
        htmlOnFocus = _ref.onFocus,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref", "tabIndex", "onFocus", "onKeyDown"]);

    var ref = React.useRef(null);
    var id = useId.useId("rover-");
    var stopId = options.stopId || htmlProps.id || id;
    var trulyDisabled = options.disabled && !options.focusable;
    var noFocused = options.currentId == null;
    var focused = options.currentId === stopId;
    var isFirst = options.stops[0] && options.stops[0].id === stopId;
    var shouldTabIndex = focused || isFirst && noFocused;
    React.useEffect(function () {
      if (trulyDisabled) return undefined;
      options.register(stopId, ref);
      return function () {
        return options.unregister(stopId);
      };
    }, [stopId, trulyDisabled, options.register, options.unregister]);
    useUpdateEffect.useUpdateEffect(function () {
      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning.warning(true, "Rover", "Can't focus rover component because `ref` wasn't passed to component.", "See https://reakit.io/docs/rover") : void 0;
        return;
      }

      if (document.activeElement !== ref.current && focused) {
        ref.current.focus();
      }
    }, [focused, options.unstable_moves]);
    var onFocus = React.useCallback(function () {
      return options.move(stopId);
    }, [options.move, stopId]);
    var onKeyDown = React.useMemo(function () {
      return createOnKeyDown.createOnKeyDown({
        onKeyDown: htmlOnKeyDown,
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
      onKeyDown: onKeyDown,
      onFocus: useAllCallbacks.useAllCallbacks(onFocus, htmlOnFocus)
    }, htmlProps);
  }
});
var Rover = createComponent.createComponent({
  as: "button",
  useHook: useRover
});

exports.Rover = Rover;
exports.useRover = useRover;
