'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
var useLiveRef = require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');

function isNativeTabbable(element) {
  if (element instanceof HTMLButtonElement) return true;
  if (element instanceof HTMLInputElement) return true;
  if (element instanceof HTMLSelectElement) return true;
  if (element instanceof HTMLTextAreaElement) return true;
  if (element instanceof HTMLAnchorElement) return true;
  if (element instanceof HTMLAudioElement) return true;
  if (element instanceof HTMLVideoElement) return true;
  return false;
}

var defaultClickKeys = ["Enter", " "];
var useTabbable = createHook.createHook({
  name: "Tabbable",
  compose: Box.useBox,
  keys: ["disabled", "focusable", "unstable_clickKeys"],
  useOptions: function useOptions(_ref, htmlProps) {
    var _ref$unstable_clickKe = _ref.unstable_clickKeys,
        unstable_clickKeys = _ref$unstable_clickKe === void 0 ? defaultClickKeys : _ref$unstable_clickKe,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["unstable_clickKeys"]);

    return _rollupPluginBabelHelpers._objectSpread2({
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
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["ref", "tabIndex", "onClick", "onMouseOver", "onMouseDown", "onKeyDown"]);

    var ref = React.useRef(null);
    var clickKeysRef = useLiveRef.useLiveRef(options.unstable_clickKeys);
    var trulyDisabled = options.disabled && !options.focusable;
    var onMouseDown = React.useCallback(function (event) {
      if (event.target instanceof HTMLInputElement) {
        if (htmlOnMouseDown) {
          htmlOnMouseDown(event);
        }

        return;
      }

      event.preventDefault();

      if (options.disabled) {
        event.stopPropagation();
      } else {
        (ref.current || event.target).focus();

        if (htmlOnMouseDown) {
          htmlOnMouseDown(event);
        }
      }
    }, [options.disabled, htmlOnMouseDown]);
    var onClick = React.useCallback(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
      } else if (htmlOnClick) {
        htmlOnClick(event);
      }
    }, [options.disabled, htmlOnClick]);
    var onMouseOver = React.useCallback(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
      } else if (htmlOnMouseOver) {
        htmlOnMouseOver(event);
      }
    }, [options.disabled, htmlOnMouseOver]);
    var onKeyDown = React.useCallback(function (event) {
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
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      disabled: trulyDisabled,
      tabIndex: trulyDisabled ? undefined : htmlTabIndex,
      "aria-disabled": options.disabled,
      onMouseDown: onMouseDown,
      onClick: onClick,
      onMouseOver: onMouseOver,
      onKeyDown: useAllCallbacks.useAllCallbacks(onKeyDown, htmlOnKeyDown)
    }, htmlProps);
  }
});
var Tabbable = createComponent.createComponent({
  as: "button",
  useHook: useTabbable
});

exports.Tabbable = Tabbable;
exports.useTabbable = useTabbable;
