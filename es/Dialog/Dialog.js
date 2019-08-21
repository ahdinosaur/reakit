import { warning } from 'reakit-utils/warning';
import { useRef, useEffect, createContext, useContext, useState, useCallback, useMemo, createElement } from 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import '../Box/Box.js';
import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import { mergeRefs } from 'reakit-utils/mergeRefs';
import { useLiveRef } from 'reakit-utils/useLiveRef';
import { useAllCallbacks } from 'reakit-utils/useAllCallbacks';
import 'reakit-utils/useSealedState';
import { useCreateElement } from 'reakit-system/useCreateElement';
import { usePipe } from 'reakit-utils/usePipe';
import 'reakit-utils/cx';
import '../Hidden/HiddenState.js';
import { useHidden } from '../Hidden/Hidden.js';
import 'react-dom';
import { Portal } from '../Portal/Portal.js';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useUpdateEffect } from 'reakit-utils/useUpdateEffect';
import { removeItemFromArray } from 'reakit-utils/removeItemFromArray';
import { useDialogState } from './DialogState.js';

function useDisclosureRef(options) {
  var disclosureRef = useRef(null);
  useEffect(function () {
    if (!options.visible) return;
    var selector = "[aria-controls~=\"" + options.unstable_hiddenId + "\"]";
    disclosureRef.current = document.querySelector(selector);
  }, [options.unstable_hiddenId, options.visible]);
  return disclosureRef;
}

function usePreventBodyScroll(targetRef, options) {
  var shouldPrevent = !options.modal ? false : Boolean(options.preventBodyScroll && options.visible);
  useEffect(function () {
    var element = targetRef.current;
    if (!element || !shouldPrevent) return undefined;
    disableBodyScroll(element);
    return function () {
      return enableBodyScroll(element);
    };
  }, [targetRef, shouldPrevent]);
}

var selector = "input, select, textarea, a[href], button, [tabindex], audio[controls], video[controls], [contenteditable]:not([contenteditable=false])";

function isHTMLElement(element) {
  return element instanceof HTMLElement;
}

function isDisabled(element) {
  return Boolean(element.disabled);
}

function hasTabIndex(element) {
  return element.hasAttribute("tabindex");
}

function hasNegativeTabIndex(element) {
  return hasTabIndex(element) && element.tabIndex < 0;
}

function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement)) return true;
  return element.hidden;
}

function isContentEditable(element) {
  var value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}

function isFocusable(element) {
  if (!isHTMLElement(element)) return false;
  if (isHidden(element)) return false;
  if (isDisabled(element)) return false;
  var localName = element.localName;
  var focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0) return true;
  var others = {
    a: function a() {
      return element.hasAttribute("href");
    },
    audio: function audio() {
      return element.hasAttribute("controls");
    },
    video: function video() {
      return element.hasAttribute("controls");
    }
  };

  if (localName in others) {
    return others[localName]();
  }

  if (isContentEditable(element)) return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!isHTMLElement(element)) return false;
  if (!isFocusable(element)) return false;
  if (hasNegativeTabIndex(element)) return false;
  return true;
}
function getAllTabbableIn(container, fallbackToFocusable) {
  var allFocusable = Array.from(container.querySelectorAll(selector));
  var allTabbable = allFocusable.filter(isTabbable);

  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }

  return allTabbable;
}
function getFirstTabbableIn(container, fallbackToFocusable) {
  var _getAllTabbableIn = getAllTabbableIn(container, fallbackToFocusable),
      first = _getAllTabbableIn[0];

  return first || null;
}
function getLastTabbableIn(container, fallbackToFocusable) {
  var allTabbable = getAllTabbableIn(container, fallbackToFocusable);
  return allTabbable[allTabbable.length - 1] || null;
}

function useFocusOnShow(dialogRef, nestedDialogs, options) {
  var initialFocusRef = options.unstable_initialFocusRef;
  var shouldFocus = options.visible && options.unstable_autoFocusOnShow;
  useUpdateEffect(function () {
    var dialog = dialogRef.current;
    process.env.NODE_ENV !== "production" ? warning(Boolean(shouldFocus && !dialog), "Dialog", "Can't set initial focus on dialog because `ref` wasn't passed to component.", "See https://reakit.io/docs/dialog") : void 0; // If there're nested open dialogs, let them handle focus

    if (!shouldFocus || !dialog || nestedDialogs.find(function (child) {
      return Boolean(child.current && !child.current.hidden);
    })) {
      return;
    }

    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus({
        preventScroll: true
      });
    } else {
      var tabbable = getFirstTabbableIn(dialog, true);

      if (tabbable) {
        tabbable.focus({
          preventScroll: true
        });
      } else {
        dialog.focus({
          preventScroll: true
        });
        process.env.NODE_ENV !== "production" ? warning(dialog.tabIndex === undefined || dialog.tabIndex < 0, "Dialog", "It's recommended to have at least one tabbable element inside dialog. The dialog element has been automatically focused.", "If this is the intended behavior, pass `tabIndex={0}` to the dialog element to disable this warning.", "See https://reakit.io/docs/dialog") : void 0;
      }
    }
  }, [dialogRef, initialFocusRef, shouldFocus, nestedDialogs]);
}

function usePortalRef(dialogRef, options) {
  var portalRef = useRef(null);
  useEffect(function () {
    var dialog = dialogRef.current;
    if (!dialog || !options.visible) return;
    portalRef.current = dialog.closest(Portal.__selector);
  }, [dialogRef, options.visible]);
  return portalRef;
}

function hasNestedOpenModals(nestedDialogs) {
  return nestedDialogs.find(function (dialog) {
    return Boolean(dialog.current && !dialog.current.hidden && dialog.current.getAttribute("aria-modal") === "true");
  });
}

var focusTrapClassName = "__reakit-focus-trap";
function isFocusTrap(element) {
  return element.classList.contains(focusTrapClassName);
}
function useFocusTrap(dialogRef, nestedDialogs, options) {
  var portalRef = usePortalRef(dialogRef, options);
  var shouldTrap = options.visible && options.modal;
  var beforeElement = useRef(null);
  var afterElement = useRef(null); // Create before and after elements
  // https://github.com/w3c/aria-practices/issues/545

  useEffect(function () {
    if (!shouldTrap) return undefined;
    var portal = portalRef.current;

    if (!portal) {
      process.env.NODE_ENV !== "production" ? warning(true, "Dialog", "Can't trap focus within modal dialog because either `ref` wasn't passed to component or the component wasn't rendered within a portal", "See https://reakit.io/docs/dialog") : void 0;
      return undefined;
    }

    if (!beforeElement.current) {
      beforeElement.current = document.createElement("div");
      beforeElement.current.className = focusTrapClassName;
      beforeElement.current.tabIndex = 0;
      beforeElement.current.style.position = "fixed";
      beforeElement.current.setAttribute("aria-hidden", "true");
    }

    if (!afterElement.current) {
      afterElement.current = beforeElement.current.cloneNode();
    }

    portal.insertAdjacentElement("beforebegin", beforeElement.current);
    portal.insertAdjacentElement("afterend", afterElement.current);
    return function () {
      if (beforeElement.current) beforeElement.current.remove();
      if (afterElement.current) afterElement.current.remove();
    };
  }, [portalRef, shouldTrap]); // Focus trap

  useEffect(function () {
    var before = beforeElement.current;
    var after = afterElement.current;
    if (!shouldTrap || !before || !after) return undefined;

    var handleFocus = function handleFocus(event) {
      var dialog = dialogRef.current;
      if (!dialog || hasNestedOpenModals(nestedDialogs)) return;
      event.preventDefault();
      var isAfter = event.target === after;
      var tabbable = isAfter ? getFirstTabbableIn(dialog) : getLastTabbableIn(dialog);

      if (tabbable) {
        tabbable.focus();
      } else {
        // fallback to dialog
        dialog.focus();
      }
    };

    before.addEventListener("focus", handleFocus);
    after.addEventListener("focus", handleFocus);
    return function () {
      before.removeEventListener("focus", handleFocus);
      after.removeEventListener("focus", handleFocus);
    };
  }, [dialogRef, nestedDialogs, shouldTrap]); // Click trap

  useEffect(function () {
    if (!shouldTrap) return undefined;

    var handleClick = function handleClick() {
      var dialog = dialogRef.current;
      var portal = portalRef.current;
      if (!dialog || !portal || hasNestedOpenModals(nestedDialogs)) return;

      if (!portal.contains(document.activeElement)) {
        dialog.focus();
      }
    };

    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  }, [dialogRef, nestedDialogs, portalRef, shouldTrap]);
}

function useFocusOnHide(dialogRef, disclosureRef, options) {
  var finalFocusRef = options.unstable_finalFocusRef || disclosureRef;
  var shouldFocus = options.unstable_autoFocusOnHide && !options.visible;
  useUpdateEffect(function () {
    if (!shouldFocus) return;
    var dialog = dialogRef.current; // Hide was triggered by a click/focus on a tabbable element outside
    // the dialog or on another dialog. We won't change focus then.

    if (document.activeElement && dialog && !dialog.contains(document.activeElement) && (isTabbable(document.activeElement) || document.activeElement.getAttribute("data-dialog") === "true")) {
      return;
    }

    if (finalFocusRef && finalFocusRef.current) {
      finalFocusRef.current.focus();
    } else {
      process.env.NODE_ENV !== "production" ? warning(true, "Dialog", "Can't return focus after closing dialog. Either render a disclosure component or provide a `unstable_finalFocusRef` prop.", "See https://reakit.io/docs/dialog") : void 0;
    }
  }, [dialogRef, finalFocusRef, shouldFocus]);
}

var DialogContext = createContext({});
function useNestedDialogs(dialogRef, options) {
  var context = useContext(DialogContext);

  var _React$useState = useState([]),
      dialogs = _React$useState[0],
      setDialogs = _React$useState[1];

  var addDialog = useCallback(function (ref) {
    if (context.addDialog) {
      context.addDialog(ref);
    }

    setDialogs(function (refs) {
      return [].concat(refs, [ref]);
    });
  }, [context.addDialog]);
  var removeDialog = useCallback(function (ref) {
    if (context.removeDialog) {
      context.removeDialog(ref);
    }

    setDialogs(function (refs) {
      return removeItemFromArray(refs, ref);
    });
  }, [context.removeDialog]); // If it's a nested dialog, add it to context

  useEffect(function () {
    if (!context.addDialog || options.unstable_orphan) return undefined;
    context.addDialog(dialogRef);
    return function () {
      if (context.removeDialog) {
        context.removeDialog(dialogRef);
      }
    };
  }, [dialogRef, context.addDialog, context.removeDialog, options.unstable_orphan]); // Close all nested dialogs when parent dialog closes

  useEffect(function () {
    if (context.visible === false && options.visible && options.hide && !options.unstable_orphan) {
      options.hide();
    }
  }, [context.visible, options.visible, options.hide, options.unstable_orphan]); // Provider

  var providerValue = useMemo(function () {
    return {
      visible: options.visible,
      addDialog: addDialog,
      removeDialog: removeDialog
    };
  }, [options.visible, addDialog, removeDialog]);
  var wrap = useCallback(function (children) {
    return createElement(DialogContext.Provider, {
      value: providerValue
    }, children);
  }, [providerValue]);
  return {
    dialogs: dialogs,
    wrap: wrap
  };
}

function useEventListenerOutside(targetRef, disclosureRef, nestedDialogs, event, listener, shouldListen) {
  var listenerRef = useLiveRef(listener);
  useEffect(function () {
    if (!shouldListen) return undefined;

    var handleEvent = function handleEvent(e) {
      if (!listenerRef.current) return;
      var element = targetRef.current;
      var disclosure = disclosureRef.current;
      var target = e.target;
      process.env.NODE_ENV !== "production" ? warning(!element, "Dialog", "Can't detect events outside dialog because `ref` wasn't passed to component.", "See https://reakit.io/docs/dialog") : void 0; // Click inside

      if (!element || element.contains(target)) return; // Click on disclosure

      if (disclosure && disclosure.contains(target)) return; // Click inside a nested dialog or focus trap

      if (isFocusTrap(target) || nestedDialogs.find(function (dialog) {
        return Boolean(dialog.current && dialog.current.contains(target));
      })) {
        return;
      }

      listenerRef.current(e);
    };

    document.addEventListener(event, handleEvent, true);
    return function () {
      document.removeEventListener(event, handleEvent, true);
    };
  }, [targetRef, event, shouldListen, nestedDialogs, listenerRef, disclosureRef]);
}

function useHideOnClickOutside(dialogRef, disclosureRef, nestedDialogs, options) {
  useEventListenerOutside(dialogRef, disclosureRef, nestedDialogs, "click", options.hide, options.visible && options.hideOnClickOutside);
  useEventListenerOutside(dialogRef, disclosureRef, nestedDialogs, "focus", options.hide, options.visible && options.hideOnClickOutside);
}

function useDisableHoverOutside(portalRef, nestedDialogs, options) {
  useEventListenerOutside(portalRef, {
    current: null
  }, nestedDialogs, "mouseover", function (event) {
    event.stopPropagation();
    event.preventDefault();
  }, options.visible && options.modal);
  useEventListenerOutside(portalRef, {
    current: null
  }, nestedDialogs, "mouseout", function (event) {
    event.stopPropagation();
    event.preventDefault();
  }, options.visible && options.modal);
}

var useDialog = createHook({
  name: "Dialog",
  compose: useHidden,
  useState: useDialogState,
  keys: ["modal", "hideOnEsc", "hideOnClickOutside", "preventBodyScroll", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_autoFocusOnShow", "unstable_autoFocusOnHide", "unstable_portal", "unstable_orphan"],
  useOptions: function useOptions(_ref) {
    var _ref$modal = _ref.modal,
        modal = _ref$modal === void 0 ? true : _ref$modal,
        _ref$hideOnEsc = _ref.hideOnEsc,
        hideOnEsc = _ref$hideOnEsc === void 0 ? true : _ref$hideOnEsc,
        _ref$hideOnClickOutsi = _ref.hideOnClickOutside,
        hideOnClickOutside = _ref$hideOnClickOutsi === void 0 ? true : _ref$hideOnClickOutsi,
        _ref$preventBodyScrol = _ref.preventBodyScroll,
        preventBodyScroll = _ref$preventBodyScrol === void 0 ? true : _ref$preventBodyScrol,
        _ref$unstable_autoFoc = _ref.unstable_autoFocusOnShow,
        unstable_autoFocusOnShow = _ref$unstable_autoFoc === void 0 ? true : _ref$unstable_autoFoc,
        _ref$unstable_autoFoc2 = _ref.unstable_autoFocusOnHide,
        unstable_autoFocusOnHide = _ref$unstable_autoFoc2 === void 0 ? true : _ref$unstable_autoFoc2,
        _ref$unstable_portal = _ref.unstable_portal,
        unstable_portal = _ref$unstable_portal === void 0 ? modal : _ref$unstable_portal,
        unstable_orphan = _ref.unstable_orphan,
        options = _objectWithoutPropertiesLoose(_ref, ["modal", "hideOnEsc", "hideOnClickOutside", "preventBodyScroll", "unstable_autoFocusOnShow", "unstable_autoFocusOnHide", "unstable_portal", "unstable_orphan"]);

    return _objectSpread2({
      modal: modal,
      hideOnEsc: hideOnEsc,
      hideOnClickOutside: hideOnClickOutside,
      preventBodyScroll: preventBodyScroll,
      unstable_autoFocusOnShow: unstable_autoFocusOnShow,
      unstable_autoFocusOnHide: unstable_autoFocusOnHide,
      unstable_portal: unstable_portal,
      unstable_orphan: modal && unstable_orphan
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlOnKeyDown = _ref2.onKeyDown,
        htmlWrap = _ref2.unstable_wrap,
        htmlProps = _objectWithoutPropertiesLoose(_ref2, ["ref", "onKeyDown", "unstable_wrap"]);

    var dialog = useRef(null);
    var disclosure = useDisclosureRef(options);

    var _useNestedDialogs = useNestedDialogs(dialog, options),
        dialogs = _useNestedDialogs.dialogs,
        wrap = _useNestedDialogs.wrap;

    usePreventBodyScroll(dialog, options);
    useFocusTrap(dialog, dialogs, options);
    useFocusOnShow(dialog, dialogs, options);
    useFocusOnHide(dialog, disclosure, options);
    useHideOnClickOutside(dialog, disclosure, dialogs, options);
    useDisableHoverOutside(dialog, dialogs, options);
    var onKeyDown = useCallback(function (event) {
      if (event.key === "Escape" && options.hideOnEsc) {
        if (!options.hide) {
          process.env.NODE_ENV !== "production" ? warning(true, "Dialog", "`hideOnEsc` prop is truthy, but `hide` prop wasn't provided.", "See https://reakit.io/docs/dialog") : void 0;
          return;
        }

        event.stopPropagation();
        options.hide();
      }
    }, [options.hideOnEsc, options.hide]);
    var wrapChildren = useCallback(function (children) {
      if (options.unstable_portal) {
        return createElement(Portal, null, wrap(children));
      }

      return wrap(children);
    }, [options.unstable_portal, wrap]);
    return _objectSpread2({
      ref: mergeRefs(dialog, htmlRef),
      role: "dialog",
      tabIndex: -1,
      "aria-modal": options.modal,
      "data-dialog": true,
      onKeyDown: useAllCallbacks(onKeyDown, htmlOnKeyDown),
      unstable_wrap: usePipe(wrapChildren, htmlWrap)
    }, htmlProps);
  }
});
var Dialog = createComponent({
  as: "div",
  useHook: useDialog,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning(!props["aria-label"] && !props["aria-labelledby"], "Dialog", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/dialog") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { Dialog, useDialog };
