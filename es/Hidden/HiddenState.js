import { warning } from 'reakit-utils/warning';
import { useState, useLayoutEffect, useCallback, useRef } from 'react';
import { useId } from 'reakit-utils/useId';
import { useSealedState } from 'reakit-utils/useSealedState';

function useLastValue(value) {
  var lastValue = useRef(null);
  useLayoutEffect(function () {
    lastValue.current = value;
  }, [value]);
  return lastValue;
}

function useHiddenState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var defaultId = useId("hidden-");

  var _useSealedState = useSealedState(initialState),
      _useSealedState$unsta = _useSealedState.unstable_hiddenId,
      hiddenId = _useSealedState$unsta === void 0 ? defaultId : _useSealedState$unsta,
      _useSealedState$unsta2 = _useSealedState.unstable_animated,
      animated = _useSealedState$unsta2 === void 0 ? false : _useSealedState$unsta2,
      _useSealedState$visib = _useSealedState.visible,
      sealedVisible = _useSealedState$visib === void 0 ? false : _useSealedState$visib,
      _useSealedState$unsta3 = _useSealedState.unstable_isMounted,
      initialIsMounted = _useSealedState$unsta3 === void 0 ? false : _useSealedState$unsta3;

  var _React$useState = useState(sealedVisible),
      visible = _React$useState[0],
      setVisible = _React$useState[1];

  var _React$useState2 = useState(false),
      animating = _React$useState2[0],
      setAnimating = _React$useState2[1];

  var _React$useState3 = useState(initialIsMounted),
      isMounted = _React$useState3[0],
      setIsMounted = _React$useState3[1];

  var lastVisible = useLastValue(visible);

  if (animated && !animating && lastVisible.current != null && lastVisible.current !== visible) {
    // Sets animating to true when when visible changes
    setAnimating(true);
  }

  useLayoutEffect(function () {
    if (typeof animated !== "number") return undefined; // Stops animation after an interval defined by animated

    var id = setTimeout(function () {
      return setAnimating(false);
    }, animated);
    return function () {
      return clearTimeout(id);
    };
  }, [animated]);
  var show = useCallback(function () {
    process.env.NODE_ENV !== "production" ? warning(!isMounted, "Hidden", "You're trying to show a hidden element that hasn't been mounted yet.", "You shouldn't conditionally render a `Hidden` component (or any of its derivatives) as this will make some features not work.", "If this is intentional, you can omit this warning by passing `unstable_isMounted: true` to `useHiddenState` or just ignore it.", "See https://reakit.io/docs/hidden/#conditionally-rendering") : void 0;
    setVisible(true);
  }, [isMounted]);
  var hide = useCallback(function () {
    return setVisible(false);
  }, []);
  var toggle = useCallback(function () {
    process.env.NODE_ENV !== "production" ? warning(!isMounted, "Hidden", "You're trying to toggle a hidden element that hasn't been mounted yet.", "You shouldn't conditionally render a `Hidden` component (or any of its derivatives) as this will make some features not work.", "If this is intentional, you can omit this warning by passing `unstable_isMounted: true` to `useHiddenState` or just ignore it.", "See https://reakit.io/docs/hidden/#conditionally-rendering") : void 0;
    setVisible(function (v) {
      return !v;
    });
  }, [isMounted]);
  var stopAnimation = useCallback(function () {
    return setAnimating(false);
  }, []);
  return {
    unstable_hiddenId: hiddenId,
    unstable_animated: animated,
    unstable_animating: animating,
    visible: visible,
    show: show,
    hide: hide,
    toggle: toggle,
    unstable_stopAnimation: stopAnimation,
    unstable_setIsMounted: process.env.NODE_ENV !== "production" ? setIsMounted : undefined
  };
}
var keys = ["unstable_hiddenId", "unstable_animated", "unstable_animating", "visible", "show", "hide", "toggle", "unstable_stopAnimation", "unstable_setIsMounted"];
useHiddenState.__keys = keys;

export { useHiddenState };
