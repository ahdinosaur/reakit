import 'reakit-utils/warning';
import { useRef, useState, useCallback, useEffect } from 'react';
import 'reakit-utils/useId';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { useSealedState } from 'reakit-utils/useSealedState';
import { useIsomorphicEffect } from 'reakit-utils/useIsomorphicEffect';
import '../Hidden/HiddenState.js';
import { useDialogState } from '../Dialog/DialogState.js';
import Popper from 'popper.js';

function usePopoverState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$gutte = _useSealedState.gutter,
      gutter = _useSealedState$gutte === void 0 ? 12 : _useSealedState$gutte,
      _useSealedState$place = _useSealedState.placement,
      sealedPlacement = _useSealedState$place === void 0 ? "bottom" : _useSealedState$place,
      _useSealedState$unsta = _useSealedState.unstable_flip,
      flip = _useSealedState$unsta === void 0 ? true : _useSealedState$unsta,
      _useSealedState$unsta2 = _useSealedState.unstable_shift,
      shift = _useSealedState$unsta2 === void 0 ? true : _useSealedState$unsta2,
      _useSealedState$unsta3 = _useSealedState.unstable_preventOverflow,
      preventOverflow = _useSealedState$unsta3 === void 0 ? true : _useSealedState$unsta3,
      _useSealedState$unsta4 = _useSealedState.unstable_boundariesElement,
      boundariesElement = _useSealedState$unsta4 === void 0 ? "scrollParent" : _useSealedState$unsta4,
      _useSealedState$unsta5 = _useSealedState.unstable_fixed,
      fixed = _useSealedState$unsta5 === void 0 ? false : _useSealedState$unsta5,
      sealed = _objectWithoutPropertiesLoose(_useSealedState, ["gutter", "placement", "unstable_flip", "unstable_shift", "unstable_preventOverflow", "unstable_boundariesElement", "unstable_fixed"]);

  var popper = useRef(null);
  var referenceRef = useRef(null);
  var popoverRef = useRef(null);
  var arrowRef = useRef(null);

  var _React$useState = useState(sealedPlacement),
      originalPlacement = _React$useState[0],
      place = _React$useState[1];

  var _React$useState2 = useState(sealedPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  var _React$useState3 = useState({}),
      popoverStyles = _React$useState3[0],
      setPopoverStyles = _React$useState3[1];

  var _React$useState4 = useState({}),
      arrowStyles = _React$useState4[0],
      setArrowStyles = _React$useState4[1];

  var dialog = useDialogState(sealed);
  var scheduleUpdate = useCallback(function () {
    if (popper.current) {
      popper.current.scheduleUpdate();
      return true;
    }

    return false;
  }, []);
  var update = useCallback(function () {
    if (popper.current) {
      popper.current.update();
      return true;
    }

    return false;
  }, []);
  useIsomorphicEffect(function () {
    if (referenceRef.current && popoverRef.current) {
      popper.current = new Popper(referenceRef.current, popoverRef.current, {
        placement: originalPlacement,
        eventsEnabled: dialog.visible,
        positionFixed: fixed,
        modifiers: {
          applyStyle: {
            enabled: false
          },
          flip: {
            enabled: flip,
            padding: 16
          },
          shift: {
            enabled: shift
          },
          offset: {
            enabled: shift,
            offset: "0, " + gutter
          },
          preventOverflow: {
            enabled: preventOverflow,
            boundariesElement: boundariesElement
          },
          arrow: arrowRef.current ? {
            enabled: true,
            element: arrowRef.current
          } : undefined,
          updateStateModifier: {
            order: 900,
            enabled: true,
            fn: function fn(data) {
              setPlacement(data.placement);
              setPopoverStyles(data.styles); // https://github.com/reakit/reakit/issues/408

              if (data.arrowStyles.left != null && !isNaN(+data.arrowStyles.left) && data.arrowStyles.top != null && !isNaN(+data.arrowStyles.top)) {
                setArrowStyles(data.arrowStyles);
              }

              return data;
            }
          }
        }
      });
    }

    return function () {
      if (popper.current) {
        popper.current.destroy();
      }
    };
  }, [dialog.visible, originalPlacement, flip, shift, gutter, preventOverflow, boundariesElement, fixed]); // This fixes cases when `unstable_portal` is `true` only when popover is visible
  // https://spectrum.chat/reakit/general/i-was-wondering-if-can-hide-portal-of-tooltip-when-conditionally-rendered~4e05ffe1-93e8-4c72-8c85-eccb1c3f2ff1

  useEffect(function () {
    if (dialog.visible && popper.current) {
      popper.current.scheduleUpdate();
    }
  }, [dialog.visible]); // Schedule an update if popover has initial visible state set to true
  // So it'll be correctly positioned

  useEffect(function () {
    if (sealed.visible && popper.current) {
      popper.current.scheduleUpdate();
    }
  }, [sealed.visible]);
  return _objectSpread2({}, dialog, {
    unstable_referenceRef: referenceRef,
    unstable_popoverRef: popoverRef,
    unstable_arrowRef: arrowRef,
    unstable_popoverStyles: popoverStyles,
    unstable_arrowStyles: arrowStyles,
    unstable_scheduleUpdate: scheduleUpdate,
    unstable_update: update,
    unstable_originalPlacement: originalPlacement,
    placement: placement,
    place: useCallback(place, [])
  });
}
var keys = [].concat(useDialogState.__keys, ["unstable_referenceRef", "unstable_popoverRef", "unstable_arrowRef", "unstable_popoverStyles", "unstable_arrowStyles", "unstable_scheduleUpdate", "unstable_update", "unstable_originalPlacement", "placement", "place"]);
usePopoverState.__keys = keys;

export { usePopoverState };
