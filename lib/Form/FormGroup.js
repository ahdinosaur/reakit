'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useLiveRef');
require('reakit-utils/useSealedState');
require('reakit-utils/useUpdateEffect');
require('reakit-utils/isPromise');
require('reakit-utils/isEmpty');
var FormState = require('./FormState.js');
require('reakit-utils/isObject');
require('./utils/setAllIn.js');
require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');
require('../formatInputName-0ecca8fe.js');
var getInputId = require('../getInputId-42bc3f17.js');
var getLabelId = require('../getLabelId-97087fff.js');
var shouldShowError = require('../shouldShowError-2e03c004.js');
var Group = require('../Group/Group.js');

var unstable_useFormGroup = createHook.createHook({
  name: "FormGroup",
  compose: Group.useGroup,
  useState: FormState.unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      id: getInputId.getInputId(options.name, options.baseId),
      tabIndex: -1,
      "aria-describedby": shouldShowError.getMessageId(options.name, options.baseId),
      "aria-labelledby": getLabelId.getLabelId(options.name, options.baseId),
      "aria-invalid": shouldShowError.shouldShowError(options, options.name)
    }, htmlProps);
  }
});
var unstable_FormGroup = createComponent.createComponent({
  as: "fieldset",
  useHook: unstable_useFormGroup
});

exports.unstable_FormGroup = unstable_FormGroup;
exports.unstable_useFormGroup = unstable_useFormGroup;
