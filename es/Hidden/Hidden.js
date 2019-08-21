import 'reakit-utils/warning';
import { useState, useEffect, useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import { cx } from 'reakit-utils/cx';
import { useHiddenState } from './HiddenState.js';

var useHidden = createHook({
  name: "Hidden",
  compose: useBox,
  useState: useHiddenState,
  useProps: function useProps(options, _ref) {
    var htmlOnAnimationEnd = _ref.onAnimationEnd,
        htmlOnTransitionEnd = _ref.onTransitionEnd,
        htmlClassName = _ref.className,
        htmlStyle = _ref.style,
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onAnimationEnd", "onTransitionEnd", "className", "style"]);

    var _React$useState = useState(null),
        hiddenClass = _React$useState[0],
        setHiddenClass = _React$useState[1];

    useEffect(function () {
      if (options.unstable_setIsMounted) {
        options.unstable_setIsMounted(true);
      }

      return function () {
        if (options.unstable_setIsMounted) {
          options.unstable_setIsMounted(false);
        }
      };
    }, [options.unstable_setIsMounted]);
    useEffect(function () {
      setHiddenClass(!options.visible ? "hidden" : null);
    }, [options.visible]);
    var onTransitionEnd = useCallback(function () {
      if (options.unstable_animated && options.unstable_stopAnimation) {
        options.unstable_stopAnimation();
      }
    }, [options.unstable_animated, options.unstable_stopAnimation]);
    var animating = options.unstable_animated && options.unstable_animating;
    var hidden = !options.visible && !animating;
    return _objectSpread2({
      role: "region",
      id: options.unstable_hiddenId,
      className: cx(hiddenClass, htmlClassName),
      onAnimationEnd: useAllCallbacks(onTransitionEnd, htmlOnAnimationEnd),
      onTransitionEnd: useAllCallbacks(onTransitionEnd, htmlOnTransitionEnd),
      hidden: hidden
    }, hidden ? {
      style: _objectSpread2({
        display: "none"
      }, htmlStyle)
    } : htmlStyle ? {
      style: htmlStyle
    } : {}, {}, htmlProps);
  }
});
var Hidden = createComponent({
  as: "div",
  useHook: useHidden
});

export { Hidden, useHidden };
