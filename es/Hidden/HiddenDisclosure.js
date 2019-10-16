import 'reakit-utils/warning';
import 'react';
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
import { useButton } from '../Button/Button.js';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useIsomorphicEffect';
import { useHiddenState } from './HiddenState.js';

var useHiddenDisclosure = createHook({
  name: "HiddenDisclosure",
  compose: useButton,
  useState: useHiddenState,
  useProps: function useProps(options, _ref) {
    var htmlOnClick = _ref.onClick,
        ariaControls = _ref["aria-controls"],
        htmlProps = _objectWithoutPropertiesLoose(_ref, ["onClick", "aria-controls"]);

    var controls = ariaControls ? ariaControls + " " + options.unstable_hiddenId : options.unstable_hiddenId;
    return _objectSpread2({
      onClick: useAllCallbacks(options.toggle, htmlOnClick),
      "aria-expanded": Boolean(options.visible),
      "aria-controls": controls
    }, htmlProps);
  }
});
var HiddenDisclosure = createComponent({
  as: "button",
  useHook: useHiddenDisclosure
});

export { HiddenDisclosure, useHiddenDisclosure };
