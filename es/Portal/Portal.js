import { createContext, useContext, useState, useEffect, createElement } from 'react';
import { createPortal } from 'react-dom';

var PortalContext = createContext(typeof document !== "undefined" ? document.body : null);
function Portal(_ref) {
  var children = _ref.children;
  // if it's a nested portal, context is the parent portal
  // otherwise it's document.body
  var context = useContext(PortalContext);

  var _React$useState = useState(function () {
    if (typeof document !== "undefined") {
      var element = document.createElement("div");
      element.className = Portal.__className;
      return element;
    } // ssr


    return null;
  }),
      portal = _React$useState[0];

  useEffect(function () {
    if (!portal || !context) return undefined;
    context.appendChild(portal);
    return function () {
      context.removeChild(portal);
    };
  }, [portal, context]);

  if (portal) {
    return createPortal(createElement(PortalContext.Provider, {
      value: portal
    }, children), portal);
  } // ssr


  return null;
}
Portal.__className = "__reakit-portal";
Portal.__selector = "." + Portal.__className;

export { Portal, PortalContext };
