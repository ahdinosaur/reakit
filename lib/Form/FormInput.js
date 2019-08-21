'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
var Tabbable = require('../Tabbable/Tabbable.js');
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
var formatInputName = require('../formatInputName-0ecca8fe.js');
var getInputId = require('../getInputId-42bc3f17.js');
var getLabelId = require('../getLabelId-97087fff.js');
var shouldShowError = require('../shouldShowError-2e03c004.js');

var defaultClickKeys = [];
var unstable_useFormInput = createHook.createHook({
  name: "FormInput",
  compose: Tabbable.useTabbable,
  useState: FormState.unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnBlur = _ref.onBlur,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onChange", "onBlur"]);

    var onChange = React.useCallback(function (event) {
      options.update(options.name, event.target.value);
    }, [options.update, options.name]);
    var onBlur = React.useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    return _rollupPluginBabelHelpers._objectSpread2({
      id: getInputId.getInputId(options.name, options.baseId),
      name: formatInputName.formatInputName(options.name),
      value: getIn.unstable_getIn(options.values, options.name, ""),
      onChange: useAllCallbacks.useAllCallbacks(onChange, htmlOnChange),
      onBlur: useAllCallbacks.useAllCallbacks(onBlur, htmlOnBlur),
      "aria-describedby": shouldShowError.getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId.getLabelId(options.name, options.baseId),
      "aria-invalid": shouldShowError.shouldShowError(options, options.name)
    }, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    return Tabbable.useTabbable(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      unstable_clickKeys: defaultClickKeys
    }), htmlProps);
  }
});
var unstable_FormInput = createComponent.createComponent({
  as: "input",
  useHook: unstable_useFormInput
});

exports.unstable_FormInput = unstable_FormInput;
exports.unstable_useFormInput = unstable_useFormInput;
