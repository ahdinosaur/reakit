import { warning } from 'reakit-utils/warning';
import { useRef, useEffect, useMemo } from 'react';
import { useId } from 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import { hasFocusWithin } from 'reakit-utils/hasFocusWithin';
import { useTabbable } from '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import { createOnKeyDown } from 'reakit-utils/createOnKeyDown';
import { useRoverState } from './RoverState.js';

var useRover = createHook({
  name: "Rover",
  compose: useTabbable,
  useState: useRoverState,
  keys: ["stopId"],
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlTabIndex = _ref.tabIndex,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["ref", "tabIndex", "onKeyDown"]);

    var ref = useRef(null);
    var id = useId("rover-");
    var stopId = options.stopId || htmlProps.id || id;
    var trulyDisabled = options.disabled && !options.focusable;
    var noFocused = options.currentId == null;
    var focused = options.currentId === stopId;
    var isFirst = (options.stops || [])[0] && options.stops[0].id === stopId;
    var shouldTabIndex = focused || isFirst && noFocused;
    useEffect(function () {
      if (trulyDisabled) return undefined;
      options.register && options.register(stopId, ref);
      return function () {
        return options.unregister && options.unregister(stopId);
      };
    }, [stopId, trulyDisabled, options.register, options.unregister]);
    useEffect(function () {
      if (!ref.current) {
        process.env.NODE_ENV !== "production" ? warning(true, "Rover", "Can't focus rover component because `ref` wasn't passed to component.", "See https://reakit.io/docs/rover") : void 0;
        return;
      }

      if (options.unstable_moves && focused && !hasFocusWithin(ref.current)) {
        ref.current.focus();
      }
    }, [focused, options.unstable_moves]);
    useEffect(function () {
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
    var onKeyDown = useMemo(function () {
      return createOnKeyDown({
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
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      id: stopId,
      tabIndex: shouldTabIndex ? htmlTabIndex : -1,
      onKeyDown: onKeyDown
    }, htmlProps);
  }
});
var Rover = createComponent({
  as: "button",
  useHook: useRover
});

export { Rover, useRover };
