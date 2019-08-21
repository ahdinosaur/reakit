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
require('./utils/getIn.js');
require('reakit-utils/toArray');
require('reakit-utils/isInteger');
require('./utils/setIn.js');
require('../formatInputName-0ecca8fe.js');
var getInputId = require('../getInputId-42bc3f17.js');
var getLabelId = require('../getLabelId-97087fff.js');

var unstable_useFormLabel = createHook.createHook({
  name: "FormLabel",
  compose: Box.useBox,
  useState: FormState.unstable_useFormState,
  keys: ["name", "label"],
  useProps: function useProps(options, htmlProps) {
    return _rollupPluginBabelHelpers._objectSpread2({
      children: options.label,
      id: getLabelId.getLabelId(options.name, options.baseId),
      htmlFor: getInputId.getInputId(options.name, options.baseId)
    }, htmlProps);
  }
});
var unstable_FormLabel = createComponent.createComponent({
  as: "label",
  useHook: unstable_useFormLabel
});

exports.unstable_FormLabel = unstable_FormLabel;
exports.unstable_useFormLabel = unstable_useFormLabel;
