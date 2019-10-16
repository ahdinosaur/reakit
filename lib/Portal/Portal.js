'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

var PortalContext = React.createContext(typeof document !== "undefined" ? document.body : null);
function Portal(_ref) {
  var children = _ref.children;
  // if it's a nested portal, context is the parent portal
  // otherwise it's document.body
  var context = React.useContext(PortalContext);

  var _React$useState = React.useState(function () {
    if (typeof document !== "undefined") {
      var element = document.createElement("div");
      element.className = Portal.__className;
      return element;
    } // ssr


    return null;
  }),
      portal = _React$useState[0];

  React.useEffect(function () {
    if (!portal || !context) return undefined;
    context.appendChild(portal);
    return function () {
      context.removeChild(portal);
    };
  }, [portal, context]);

  if (portal) {
    return ReactDOM.createPortal(React.createElement(PortalContext.Provider, {
      value: portal
    }, children), portal);
  } // ssr


  return null;
}
Portal.__className = "__reakit-portal";
Portal.__selector = "." + Portal.__className;

exports.Portal = Portal;
exports.PortalContext = PortalContext;
