'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
var Rover = require('../Rover/Rover.js');
var __utils = require('../__utils-8078ee09.js');
var TabState = require('./TabState.js');

var useTab = createHook.createHook({
  name: "Tab",
  compose: Rover.useRover,
  useState: TabState.useTabState,
  useOptions: function useOptions(_ref) {
    var _ref$focusable = _ref.focusable,
        focusable = _ref$focusable === void 0 ? true : _ref$focusable,
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["focusable"]);

    return _rollupPluginBabelHelpers._objectSpread2({
      focusable: focusable
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlOnClick = _ref2.onClick,
        htmlOnFocus = _ref2.onFocus,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["onClick", "onFocus"]);

    var selected = options.selectedId === options.stopId;
    var onClick = React.useCallback(function () {
      if (!options.disabled && !selected) {
        options.select(options.stopId);
      }
    }, [options.disabled, selected, options.select, options.stopId]);
    var onFocus = React.useCallback(function () {
      if (!options.disabled && !options.manual && !selected) {
        options.select(options.stopId);
      }
    }, [options.disabled, options.manual, selected, options.select, options.stopId]);
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "tab",
      id: __utils.getTabId(options.stopId, options.unstable_baseId),
      "aria-selected": selected,
      "aria-controls": __utils.getTabPanelId(options.stopId, options.unstable_baseId),
      onClick: useAllCallbacks.useAllCallbacks(onClick, htmlOnClick),
      onFocus: useAllCallbacks.useAllCallbacks(onFocus, htmlOnFocus)
    }, htmlProps);
  }
});
var Tab = createComponent.createComponent({
  as: "button",
  useHook: useTab
});

exports.Tab = Tab;
exports.useTab = useTab;
