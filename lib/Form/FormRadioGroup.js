'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reakit-utils/warning');
var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useLiveRef');
require('reakit-utils/useSealedState');
var usePipe = require('reakit-utils/usePipe');
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
require('../getInputId-42bc3f17.js');
require('../getLabelId-97087fff.js');
require('../shouldShowError-2e03c004.js');
require('../Group/Group.js');
var FormGroup = require('./FormGroup.js');
var RoverState = require('../Rover/RoverState.js');

var FormRadioGroupContext = React.createContext(null);
var unstable_useFormRadioGroup = createHook.createHook({
  name: "FormRadioGroup",
  compose: FormGroup.unstable_useFormGroup,
  useState: FormState.unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(_, _ref) {
    var htmlWrap = _ref.unstable_wrap,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["unstable_wrap"]);

    var rover = RoverState.useRoverState({
      loop: true
    });
    var providerValue = React.useMemo(function () {
      return rover;
    }, [rover.stops, rover.currentId, rover.unstable_pastId]);
    var wrap = React.useCallback(function (children) {
      return React.createElement(FormRadioGroupContext.Provider, {
        value: providerValue
      }, children);
    }, [providerValue]);
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "radiogroup",
      unstable_wrap: usePipe.usePipe(wrap, htmlWrap)
    }, htmlProps);
  }
});
var unstable_FormRadioGroup = createComponent.createComponent({
  as: "fieldset",
  useHook: unstable_useFormRadioGroup
});

exports.FormRadioGroupContext = FormRadioGroupContext;
exports.unstable_FormRadioGroup = unstable_FormRadioGroup;
exports.unstable_useFormRadioGroup = unstable_useFormRadioGroup;
