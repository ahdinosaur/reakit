'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useLiveRef');
require('reakit-utils/useSealedState');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/isPromise');
require('reakit-utils/isEmpty');
var FormState = require('./FormState.js');
require('reakit-utils/isObject');
require('./utils/setAllIn.js');
var getIn = require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');
require('../formatInputName-0ecca8fe.js');
require('../getInputId-42bc3f17.js');
var shouldShowError = require('../shouldShowError-2e03c004.js');

function shouldShowMessage(_ref, name) {
  var touched = _ref.touched,
      messages = _ref.messages;
  return Boolean(getIn.unstable_getIn(touched, name) && getIn.unstable_getIn(messages, name));
}

var unstable_useFormMessage = createHook.createHook({
  name: "FormMessage",
  compose: Box.useBox,
  useState: FormState.unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, htmlProps) {
    var children = shouldShowError.shouldShowError(options, options.name) ? getIn.unstable_getIn(options.errors, options.name) : undefined;
    children = children || (shouldShowMessage(options, options.name) ? getIn.unstable_getIn(options.messages, options.name) : undefined);
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "alert",
      id: shouldShowError.getMessageId(options.name, options.baseId),
      children: children
    }, htmlProps);
  }
});
var unstable_FormMessage = createComponent.createComponent({
  as: "div",
  useHook: unstable_useFormMessage
});

exports.unstable_FormMessage = unstable_FormMessage;
exports.unstable_useFormMessage = unstable_useFormMessage;
