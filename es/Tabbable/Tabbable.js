import { useRef, useCallback } from 'react';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import { useLiveRef } from 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import { isFocusable } from 'reakit-utils/tabbable';
import { hasFocusWithin } from 'reakit-utils/hasFocusWithin';

function isNativeTabbable(element) {
  return element instanceof HTMLButtonElement || element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement || element instanceof HTMLAnchorElement || element instanceof HTMLAudioElement || element instanceof HTMLVideoElement;
}

function isFormTabbable(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement;
}

var defaultClickKeys = ["Enter", " "];
var useTabbable = createHook({
  name: "Tabbable",
  compose: useBox,
  keys: ["disabled", "focusable", "unstable_clickKeys"],
  useOptions: function useOptions(_ref, htmlProps) {
    var _ref$unstable_clickKe = _ref.unstable_clickKeys,
        unstable_clickKeys = _ref$unstable_clickKe === void 0 ? defaultClickKeys : _ref$unstable_clickKe,
        options = _objectWithoutPropertiesLoose(_ref, ["unstable_clickKeys"]);

    return _objectSpread2({
      unstable_clickKeys: unstable_clickKeys,
      disabled: htmlProps.disabled
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        _ref2$tabIndex = _ref2.tabIndex,
        htmlTabIndex = _ref2$tabIndex === void 0 ? 0 : _ref2$tabIndex,
        htmlOnClick = _ref2.onClick,
        htmlOnMouseOver = _ref2.onMouseOver,
        htmlOnMouseDown = _ref2.onMouseDown,
        htmlOnKeyDown = _ref2.onKeyDown,
        htmlProps = _objectWithoutPropertiesLoose(_ref2, ["ref", "tabIndex", "onClick", "onMouseOver", "onMouseDown", "onKeyDown"]);

    var ref = useRef(null);
    var clickKeysRef = useLiveRef(options.unstable_clickKeys);
    var trulyDisabled = options.disabled && !options.focusable;
    var onMouseDown = useCallback(function (event) {
      if (isFormTabbable(event.target) || // https://github.com/facebook/react/issues/11387
      !event.currentTarget.contains(event.target)) {
        if (htmlOnMouseDown) {
          htmlOnMouseDown(event);
        }

        return;
      }

      event.preventDefault();

      if (options.disabled) {
        event.stopPropagation();
      } else {
        var currentTarget = event.currentTarget;
        var target = event.target;
        var isFocusControl = isFocusable(target) || target instanceof HTMLLabelElement;

        if (!hasFocusWithin(currentTarget) || // has focus within, but clicked on the tabbable element itself
        currentTarget === target || // clicked on an element other than the tabbable, but it's not
        // focusable nor a label element (controls focus)
        !isFocusControl) {
          currentTarget.focus();
        }

        if (htmlOnMouseDown) {
          htmlOnMouseDown(event);
        }
      }
    }, [options.disabled, htmlOnMouseDown]);
    var onClick = useCallback(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
      } else if (htmlOnClick) {
        htmlOnClick(event);
      }
    }, [options.disabled, htmlOnClick]);
    var onMouseOver = useCallback(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
      } else if (htmlOnMouseOver) {
        htmlOnMouseOver(event);
      }
    }, [options.disabled, htmlOnMouseOver]);
    var onKeyDown = useCallback(function (event) {
      if (options.disabled) return;
      var isClickKey = clickKeysRef.current && clickKeysRef.current.indexOf(event.key) !== -1;
      if (!isClickKey) return;
      var isDefaultClickKey = defaultClickKeys.indexOf(event.key) !== -1;

      if (isDefaultClickKey && isNativeTabbable(event.target)) {
        return;
      }

      event.preventDefault();
      event.target.dispatchEvent(new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    }, [clickKeysRef, options.disabled]);
    return _objectSpread2({
      ref: mergeRefs(ref, htmlRef),
      disabled: trulyDisabled,
      tabIndex: trulyDisabled ? undefined : htmlTabIndex,
      "aria-disabled": options.disabled,
      onMouseDown: onMouseDown,
      onClick: onClick,
      onMouseOver: onMouseOver,
      onKeyDown: useAllCallbacks(onKeyDown, htmlOnKeyDown)
    }, htmlProps);
  }
});
var Tabbable = createComponent({
  as: "button",
  useHook: useTabbable
});

export { Tabbable, useTabbable };
