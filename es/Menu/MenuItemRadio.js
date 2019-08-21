import 'reakit-utils/warning';
import { useCallback } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/mergeRefs';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useAllCallbacks';
import '../Tabbable/Tabbable.js';
import 'reakit-utils/useSealedState';
import '../Hidden/HiddenState.js';
import 'reakit-utils/useUpdateEffect';
import '../Dialog/DialogState.js';
import 'reakit-utils/createOnKeyDown';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Radio/RadioState.js';
import { useRadio } from '../Radio/Radio.js';
import 'popper.js';
import '../Popover/PopoverState.js';
import '../MenuContext-a9fa26a4.js';
import { useMenuState } from './MenuState.js';
import { useMenuItem } from './MenuItem.js';

var useMenuItemRadio = createHook({
  name: "MenuItemRadio",
  compose: [useMenuItem, useRadio],
  useState: useMenuState,
  keys: ["name"],
  useOptions: function useOptions(options) {
    var setState = useCallback(function (value) {
      return options.unstable_update(options.name, value);
    }, [options.unstable_update, options.name]);
    return _objectSpread2({}, options, {
      state: options.unstable_values[options.name],
      setState: setState
    });
  },
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2({
      role: "menuitemradio"
    }, htmlProps);
  }
});
var MenuItemRadio = createComponent({
  as: "button",
  useHook: useMenuItemRadio
});

export { MenuItemRadio, useMenuItemRadio };
