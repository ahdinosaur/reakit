import 'reakit-utils/warning';
import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/tabbable';
import 'reakit-utils/hasFocusWithin';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import { useRover } from '../Rover/Rover.js';
import { g as getTabId, a as getTabPanelId } from '../__utils-e3f43a24.js';
import { useTabState } from './TabState.js';

var useTab = createHook({
  name: "Tab",
  compose: useRover,
  useState: useTabState,
  useOptions: function useOptions(_ref) {
    var _ref$focusable = _ref.focusable,
        focusable = _ref$focusable === void 0 ? true : _ref$focusable,
        options = _objectWithoutPropertiesLoose(_ref, ["focusable"]);

    return _objectSpread2({
      focusable: focusable
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlOnClick = _ref2.onClick,
        htmlOnFocus = _ref2.onFocus,
        htmlProps = _objectWithoutPropertiesLoose(_ref2, ["onClick", "onFocus"]);

    var selected = options.selectedId === options.stopId;
    var onClick = useCallback(function () {
      if (!options.disabled && !selected) {
        options.select(options.stopId);
      }
    }, [options.disabled, selected, options.select, options.stopId]);
    var onFocus = useCallback(function () {
      if (!options.disabled && !options.manual && !selected) {
        options.select(options.stopId);
      }
    }, [options.disabled, options.manual, selected, options.select, options.stopId]);
    return _objectSpread2({
      role: "tab",
      id: getTabId(options.stopId, options.unstable_baseId),
      "aria-selected": selected,
      "aria-controls": getTabPanelId(options.stopId, options.unstable_baseId),
      onClick: useAllCallbacks(onClick, htmlOnClick),
      onFocus: useAllCallbacks(onFocus, htmlOnFocus)
    }, htmlProps);
  }
});
var Tab = createComponent({
  as: "button",
  useHook: useTab
});

export { Tab, useTab };
