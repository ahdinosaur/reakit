'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
var useLiveRef = require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
var tabbable = require('reakit-utils/tabbable');
require('reakit-utils/useSealedState');
var useCreateElement = require('reakit-system/useCreateElement');
var usePipe = require('reakit-utils/usePipe');
require('reakit-utils/cx');
var useIsomorphicEffect = require('reakit-utils/useIsomorphicEffect');
require('../Hidden/HiddenState.js');
var Hidden = require('../Hidden/Hidden.js');
var bodyScrollLock = require('body-scroll-lock');
var useUpdateEffect = require('reakit-utils/useUpdateEffect');
var closest = require('reakit-utils/closest');
require('react-dom');
var Portal = require('../Portal/Portal.js');
var removeItemFromArray = require('reakit-utils/removeItemFromArray');
var DialogState = require('./DialogState.js');

function useDisclosuresRef(options) {
  var disclosuresRef = React.useRef([]);
  var lastActiveElement = React.useRef(null);
  useIsomorphicEffect.useIsomorphicEffect(function () {
    if (options.visible) return undefined;

    var onFocus = function onFocus() {
      lastActiveElement.current = document.activeElement;
    };

    document.addEventListener("focus", onFocus, true);
    return function () {
      return document.removeEventListener("focus", onFocus, true);
    };
  }, [options.visible]);
  React.useEffect(function () {
    if (!options.visible) return;
    var selector = "[aria-controls~=\"" + options.unstable_hiddenId + "\"]";
    var disclosures = Array.from(document.querySelectorAll(selector));

    if (lastActiveElement.current instanceof HTMLElement) {
      if (disclosures.indexOf(lastActiveElement.current) !== -1) {
        disclosuresRef.current = [lastActiveElement.current].concat(disclosures.filter(function (disclosure) {
          return disclosure !== lastActiveElement.current;
        }));
      } else {
        disclosuresRef.current = [lastActiveElement.current].concat(disclosures);
      }
    } else {
      disclosuresRef.current = disclosures;
    }
  }, [options.unstable_hiddenId, options.visible]);
  return disclosuresRef;
}

function usePreventBodyScroll(targetRef, options) {
  var shouldPrevent = !options.modal ? false : Boolean(options.preventBodyScroll && options.visible);
  React.useEffect(function () {
    var element = targetRef.current;
    if (!element || !shouldPrevent) return undefined;
    bodyScrollLock.disableBodyScroll(element, {
      reserveScrollBarGap: true
    });
    return function () {
      return bodyScrollLock.enableBodyScroll(element);
    };
  }, [targetRef, shouldPrevent]);
}

function useFocusOnShow(dialogRef, nestedDialogs, options) {
  var initialFocusRef = options.unstable_initialFocusRef;
  var shouldFocus = options.visible && options.unstable_autoFocusOnShow;
  useUpdateEffect.useUpdateEffect(function () {
    var dialog = dialogRef.current;
    process.env.NODE_ENV !== "production" ? warning.warning(Boolean(shouldFocus && !dialog), "Dialog", "Can't set initial focus on dialog because `ref` wasn't passed to component.", "See https://reakit.io/docs/dialog") : void 0; // If there're nested open dialogs, let them handle focus

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
      var tabbable$1 = tabbable.getFirstTabbableIn(dialog, true);

      var isActive = function isActive() {
        return dialog.contains(document.activeElement);
      };

      if (tabbable$1) {
        tabbable.forceFocus(tabbable$1, {
          preventScroll: true,
          isActive: isActive
        });
      } else {
        tabbable.forceFocus(dialog, {
          preventScroll: true,
          isActive: isActive
        });
        process.env.NODE_ENV !== "production" ? warning.warning(dialog.tabIndex === undefined || dialog.tabIndex < 0, "Dialog", "It's recommended to have at least one tabbable element inside dialog. The dialog element has been automatically focused.", "If this is the intended behavior, pass `tabIndex={0}` to the dialog element to disable this warning.", "See https://reakit.io/docs/dialog/#initial-focus") : void 0;
      }
    }
  }, [dialogRef, nestedDialogs, initialFocusRef, shouldFocus]);
}

function usePortalRef(dialogRef, options) {
  var portalRef = React.useRef(null);
  React.useEffect(function () {
    var dialog = dialogRef.current;
    if (!dialog || !options.visible) return;
    portalRef.current = closest.closest(dialog, Portal.Portal.__selector);
  }, [dialogRef, options.visible]);
  return portalRef;
}

function removeFromDOM(element) {
  if (element.parentNode == null) return;
  element.parentNode.removeChild(element);
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
  var beforeElement = React.useRef(null);
  var afterElement = React.useRef(null); // Create before and after elements
  // https://github.com/w3c/aria-practices/issues/545

  React.useEffect(function () {
    if (!shouldTrap) return undefined;
    var portal = portalRef.current;

    if (!portal) {
      process.env.NODE_ENV !== "production" ? warning.warning(true, "Dialog", "Can't trap focus within modal dialog because either `ref` wasn't passed to component or the component wasn't rendered within a portal", "See https://reakit.io/docs/dialog") : void 0;
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
      if (beforeElement.current) removeFromDOM(beforeElement.current);
      if (afterElement.current) removeFromDOM(afterElement.current);
    };
  }, [portalRef, shouldTrap]); // Focus trap

  React.useEffect(function () {
    var before = beforeElement.current;
    var after = afterElement.current;
    if (!shouldTrap || !before || !after) return undefined;

    var handleFocus = function handleFocus(event) {
      var dialog = dialogRef.current;
      if (!dialog || hasNestedOpenModals(nestedDialogs)) return;
      event.preventDefault();
      var isAfter = event.target === after;
      var tabbable$1 = isAfter ? tabbable.getFirstTabbableIn(dialog) : tabbable.getLastTabbableIn(dialog);

      if (tabbable$1) {
        tabbable$1.focus();
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

  React.useEffect(function () {
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

function useFocusOnHide(dialogRef, disclosuresRef, options) {
  var shouldFocus = options.unstable_autoFocusOnHide && !options.visible;
  useUpdateEffect.useUpdateEffect(function () {
    if (!shouldFocus) return;
    var dialog = dialogRef.current; // Hide was triggered by a click/focus on a tabbable element outside
    // the dialog or on another dialog. We won't change focus then.

    if (document.activeElement && dialog && !dialog.contains(document.activeElement) && (tabbable.isTabbable(document.activeElement) || document.activeElement.getAttribute("data-dialog") === "true")) {
      return;
    }

    var finalFocusEl = options.unstable_finalFocusRef && options.unstable_finalFocusRef.current || disclosuresRef.current && disclosuresRef.current[0];

    if (finalFocusEl) {
      tabbable.forceFocus(finalFocusEl);
    } else {
      process.env.NODE_ENV !== "production" ? warning.warning(true, "Dialog", "Can't return focus after closing dialog. Either render a disclosure component or provide a `unstable_finalFocusRef` prop.", "See https://reakit.io/docs/dialog") : void 0;
    }
  }, [dialogRef, disclosuresRef, shouldFocus]);
}

var DialogContext = React.createContext({});
function useNestedDialogs(dialogRef, options) {
  var context = React.useContext(DialogContext);

  var _React$useState = React.useState([]),
      dialogs = _React$useState[0],
      setDialogs = _React$useState[1];

  var addDialog = React.useCallback(function (ref) {
    if (context.addDialog) {
      context.addDialog(ref);
    }

    setDialogs(function (refs) {
      return [].concat(refs, [ref]);
    });
  }, [context.addDialog]);
  var removeDialog = React.useCallback(function (ref) {
    if (context.removeDialog) {
      context.removeDialog(ref);
    }

    setDialogs(function (refs) {
      return removeItemFromArray.removeItemFromArray(refs, ref);
    });
  }, [context.removeDialog]); // If it's a nested dialog, add it to context

  React.useEffect(function () {
    if (!context.addDialog || options.unstable_orphan) return undefined;
    context.addDialog(dialogRef);
    return function () {
      if (context.removeDialog) {
        context.removeDialog(dialogRef);
      }
    };
  }, [dialogRef, context.addDialog, context.removeDialog, options.unstable_orphan]); // Close all nested dialogs when parent dialog closes

  React.useEffect(function () {
    if (context.visible === false && options.visible && options.hide && !options.unstable_orphan) {
      options.hide();
    }
  }, [context.visible, options.visible, options.hide, options.unstable_orphan]); // Provider

  var providerValue = React.useMemo(function () {
    return {
      visible: options.visible,
      addDialog: addDialog,
      removeDialog: removeDialog
    };
  }, [options.visible, addDialog, removeDialog]);
  var wrap = React.useCallback(function (children) {
    return React.createElement(DialogContext.Provider, {
      value: providerValue
    }, children);
  }, [providerValue]);
  return {
    dialogs: dialogs,
    wrap: wrap
  };
}

function useEventListenerOutside(containerRef, disclosuresRef, nestedDialogs, event, listener, shouldListen) {
  var listenerRef = useLiveRef.useLiveRef(listener);
  React.useEffect(function () {
    if (!shouldListen) return undefined;

    var handleEvent = function handleEvent(e) {
      if (!listenerRef.current) return;
      var container = containerRef.current;
      var disclosures = disclosuresRef.current || [];
      var target = e.target;

      if (!container) {
        process.env.NODE_ENV !== "production" ? warning.warning(true, "Dialog", "Can't detect events outside dialog because `ref` wasn't passed to component.", "See https://reakit.io/docs/dialog") : void 0;
        return;
      } // Click inside dialog


      if (container.contains(target)) return; // Click on disclosure

      if (disclosures.length && disclosures.some(function (disclosure) {
        return disclosure.contains(target);
      })) {
        return;
      } // Click inside a nested dialog or focus trap


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
  }, [containerRef, disclosuresRef, nestedDialogs, event, shouldListen, listenerRef]);
}

function useHideOnClickOutside(dialogRef, disclosuresRef, nestedDialogs, options) {
  var useEvent = function useEvent(eventType) {
    return useEventListenerOutside(dialogRef, disclosuresRef, nestedDialogs, eventType, options.hide, options.visible && options.hideOnClickOutside);
  };

  useEvent("click");
  useEvent("focus");
}

function useDisableHoverOutside(portalRef, nestedDialogs, options) {
  var useEvent = function useEvent(eventType) {
    return useEventListenerOutside(portalRef, {
      current: null
    }, nestedDialogs, eventType, function (event) {
      event.stopPropagation();
      event.preventDefault();
    }, options.visible && options.modal);
  };

  useEvent("mouseover");
  useEvent("mouseout");
}

function usePortal(dialogRef, options) {
  var context = React.useContext(Portal.PortalContext);
  var wrap = React.useCallback(function (children) {
    if (options.unstable_portal) {
      // Internally, Portal wraps children within a PortalContext.Provider
      // where the value is the portal itself, which means that nested
      // portals will be children of the parent portal and siblings of the
      // parent modal. This doesn't work out with VoiceOver, which seems to
      // require nested modals to be children of their parent modals.
      // So we overwrite the portal context for the children with the current
      // modal so nested modals will be children of it.
      children = React.createElement(Portal.Portal, null, React.createElement(Portal.PortalContext.Provider, {
        value: dialogRef.current
      }, children));
    }

    if (options.unstable_orphan && context) {
      var value = closest.closest(context, Portal.Portal.__selector);
      children = React.createElement(Portal.PortalContext.Provider, {
        value: value
      }, children);
    }

    return children;
  }, [dialogRef, context, options.unstable_portal, options.unstable_orphan]);
  return wrap;
}

var useDialog = createHook.createHook({
  name: "Dialog",
  compose: Hidden.useHidden,
  useState: DialogState.useDialogState,
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
        options = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["modal", "hideOnEsc", "hideOnClickOutside", "preventBodyScroll", "unstable_autoFocusOnShow", "unstable_autoFocusOnHide", "unstable_portal", "unstable_orphan"]);

    return _rollupPluginBabelHelpers._objectSpread2({
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
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref2, ["ref", "onKeyDown", "unstable_wrap"]);

    var dialog = React.useRef(null);
    var disclosures = useDisclosuresRef(options);

    var _useNestedDialogs = useNestedDialogs(dialog, options),
        dialogs = _useNestedDialogs.dialogs,
        wrap = _useNestedDialogs.wrap;

    var portalWrap = usePortal(dialog, options);
    usePreventBodyScroll(dialog, options);
    useFocusTrap(dialog, dialogs, options);
    useFocusOnShow(dialog, dialogs, options);
    useFocusOnHide(dialog, disclosures, options);
    useHideOnClickOutside(dialog, disclosures, dialogs, options);
    useDisableHoverOutside(dialog, dialogs, options);
    var onKeyDown = React.useCallback(function (event) {
      if (event.key === "Escape" && options.hideOnEsc) {
        if (!options.hide) {
          process.env.NODE_ENV !== "production" ? warning.warning(true, "Dialog", "`hideOnEsc` prop is truthy, but `hide` prop wasn't provided.", "See https://reakit.io/docs/dialog") : void 0;
          return;
        }

        event.stopPropagation();
        options.hide();
      }
    }, [options.hideOnEsc, options.hide]);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(dialog, htmlRef),
      role: "dialog",
      tabIndex: -1,
      onKeyDown: useAllCallbacks.useAllCallbacks(onKeyDown, htmlOnKeyDown),
      unstable_wrap: usePipe.usePipe(wrap, portalWrap, htmlWrap),
      "aria-modal": options.modal ? true : undefined,
      "data-dialog": true
    }, htmlProps);
  }
});
var Dialog = createComponent.createComponent({
  as: "div",
  useHook: useDialog,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? warning.warning(!props["aria-label"] && !props["aria-labelledby"], "Dialog", "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/dialog") : void 0;
    return useCreateElement.useCreateElement(type, props, children);
  }
});

exports.Dialog = Dialog;
exports.useDialog = useDialog;
