'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var mergeRefs = require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
require('reakit-utils/useAllCallbacks');
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
var Tabbable = require('../Tabbable/Tabbable.js');

var useButton = createHook.createHook({
  name: "Button",
  compose: Tabbable.useTabbable,
  useProps: function useProps(_, _ref) {
    var htmlRef = _ref.ref,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["ref"]);

    var ref = React.useRef(null);

    var _React$useState = React.useState(undefined),
        role = _React$useState[0],
        setRole = _React$useState[1];

    React.useEffect(function () {
      if (ref.current && (ref.current instanceof HTMLButtonElement || ref.current instanceof HTMLAnchorElement || ref.current instanceof HTMLInputElement)) {
        return;
      }

      setRole("button");
    }, []);
    return _rollupPluginBabelHelpers._objectSpread2({
      ref: mergeRefs.mergeRefs(ref, htmlRef),
      role: role,
      type: "button"
    }, htmlProps);
  }
});
var Button = createComponent.createComponent({
  as: "button",
  useHook: useButton
});

exports.Button = Button;
exports.useButton = useButton;