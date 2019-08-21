'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/mergeRefs');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
require('../Tabbable/Tabbable.js');
require('reakit-utils/removeIndexFromArray');
require('reakit-utils/useSealedState');
require('../Checkbox/CheckboxState.js');
var Checkbox = require('../Checkbox/Checkbox.js');
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

var unstable_useFormCheckbox = createHook.createHook({
  name: "FormCheckbox",
  compose: Checkbox.useCheckbox,
  useState: FormState.unstable_useFormState,
  keys: ["name", "value"],
  useProps: function useProps(options, _ref) {
    var htmlOnBlur = _ref.onBlur,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onBlur"]);

    var isBoolean = typeof options.value === "undefined";
    var onBlur = React.useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    return _rollupPluginBabelHelpers._objectSpread2({
      "aria-invalid": shouldShowError.shouldShowError(options, options.name),
      name: formatInputName.formatInputName(options.name),
      onBlur: useAllCallbacks.useAllCallbacks(onBlur, htmlOnBlur)
    }, isBoolean ? {
      id: getInputId.getInputId(options.name, options.baseId),
      "aria-describedby": shouldShowError.getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId.getLabelId(options.name, options.baseId)
    } : {}, {}, htmlProps);
  },
  useCompose: function useCompose(options, htmlProps) {
    var state = getIn.unstable_getIn(options.values, options.name);

    var setState = function setState(value) {
      return options.update(options.name, value);
    };

    return Checkbox.useCheckbox(_rollupPluginBabelHelpers._objectSpread2({}, options, {
      state: state,
      setState: setState
    }), htmlProps);
  }
});
var unstable_FormCheckbox = createComponent.createComponent({
  as: "input",
  useHook: unstable_useFormCheckbox
});

exports.unstable_FormCheckbox = unstable_FormCheckbox;
exports.unstable_useFormCheckbox = unstable_useFormCheckbox;
