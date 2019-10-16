'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('reakit-utils/useSealedState');
var cx = require('reakit-utils/cx');
require('reakit-utils/useIsomorphicEffect');
var HiddenState = require('./HiddenState.js');

function useWarningIfMultiple(options) {
  if (process.env.NODE_ENV === "production") return;
  React.useEffect(function () {
    if (!options.unstable_hiddenId) return;
    process.env.NODE_ENV !== "production" ? warning.warning(document.querySelectorAll("#" + options.unstable_hiddenId).length > 1, "Hidden", "You're reusing the same `useModuleState` for multiple components (Hidden, Dialog, Popover, Menu etc.).", "This is not allowed! If you want to use multiple components, make sure you're using different states.", "See https://reakit.io/docs/hidden/#multiple-components") : void 0;
  }, [options.unstable_hiddenId]);
}

function useSetIsMounted(options) {
  if (process.env.NODE_ENV === "production") return;
  React.useEffect(function () {
    if (options.unstable_setIsMounted) {
      options.unstable_setIsMounted(true);
    }

    return function () {
      if (options.unstable_setIsMounted) {
        options.unstable_setIsMounted(false);
      }
    };
  }, [options.unstable_setIsMounted]);
}

var useHidden = createHook.createHook({
  name: "Hidden",
  compose: Box.useBox,
  useState: HiddenState.useHiddenState,
  useProps: function useProps(options, _ref) {
    var htmlOnAnimationEnd = _ref.onAnimationEnd,
        htmlOnTransitionEnd = _ref.onTransitionEnd,
        htmlClassName = _ref.className,
        htmlStyle = _ref.style,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onAnimationEnd", "onTransitionEnd", "className", "style"]);

    var _React$useState = React.useState(null),
        hiddenClass = _React$useState[0],
        setHiddenClass = _React$useState[1];

    useWarningIfMultiple(options);
    useSetIsMounted(options);
    React.useEffect(function () {
      setHiddenClass(!options.visible ? "hidden" : null);
    }, [options.visible]);
    var onTransitionEnd = React.useCallback(function () {
      if (options.unstable_animated && options.unstable_stopAnimation) {
        options.unstable_stopAnimation();
      }
    }, [options.unstable_animated, options.unstable_stopAnimation]);
    var animating = options.unstable_animated && options.unstable_animating;
    var hidden = !options.visible && !animating;
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "region",
      id: options.unstable_hiddenId,
      className: cx.cx(hiddenClass, htmlClassName),
      onAnimationEnd: useAllCallbacks.useAllCallbacks(onTransitionEnd, htmlOnAnimationEnd),
      onTransitionEnd: useAllCallbacks.useAllCallbacks(onTransitionEnd, htmlOnTransitionEnd),
      hidden: hidden
    }, hidden ? {
      style: _rollupPluginBabelHelpers._objectSpread2({
        display: "none"
      }, htmlStyle)
    } : htmlStyle ? {
      style: htmlStyle
    } : {}, {}, htmlProps);
  }
});
var Hidden = createComponent.createComponent({
  as: "div",
  useHook: useHidden
});

exports.Hidden = Hidden;
exports.useHidden = useHidden;
