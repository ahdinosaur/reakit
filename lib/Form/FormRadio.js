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
require('reakit-utils/tabbable');
require('reakit-utils/hasFocusWithin');
require('../Tabbable/Tabbable.js');
require('reakit-utils/useSealedState');
require('reakit-utils/usePipe');
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
require('../getInputId-42bc3f17.js');
require('../getLabelId-97087fff.js');
require('../shouldShowError-2e03c004.js');
require('../Group/Group.js');
require('./FormGroup.js');
require('reakit-utils/createOnKeyDown');
require('../Rover/RoverState.js');
require('../Rover/Rover.js');
require('../Radio/RadioState.js');
var Radio = require('../Radio/Radio.js');
var FormRadioGroup = require('./FormRadioGroup.js');

var unstable_useFormRadio = createHook.createHook({
  name: "FormRadio",
  compose: Radio.useRadio,
  useState: FormState.unstable_useFormState,
  keys: ["name", "value"],
  useOptions: function useOptions(options) {
    var rover = React.useContext(FormRadioGroup.FormRadioGroupContext);
    var currentChecked = getIn.unstable_getIn(options.values, options.name);
    var checked = currentChecked === options.value;

    if (!rover) {
      // TODO: Better error
      throw new Error("Missing FormRadioGroup");
    }

    return _rollupPluginBabelHelpers._objectSpread2({}, rover, {}, options, {
      checked: checked
    });
  },
  useProps: function useProps(options, _ref) {
    var htmlOnChange = _ref.onChange,
        htmlOnBlur = _ref.onBlur,
        htmlOnFocus = _ref.onFocus,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onChange", "onBlur", "onFocus"]);

    var onChange = React.useCallback(function () {
      options.update(options.name, options.value);
    }, [options.update, options.name, options.value]);
    var onBlur = React.useCallback(function () {
      options.blur(options.name);
    }, [options.blur, options.name]);
    var onFocus = React.useCallback(function () {
      options.update(options.name, options.value);
    }, [options.update, options.name, options.value]);
    return _rollupPluginBabelHelpers._objectSpread2({
      name: formatInputName.formatInputName(options.name),
      onChange: useAllCallbacks.useAllCallbacks(onChange, htmlOnChange),
      onBlur: useAllCallbacks.useAllCallbacks(onBlur, htmlOnBlur),
      onFocus: useAllCallbacks.useAllCallbacks(onFocus, htmlOnFocus)
    }, htmlProps);
  }
});
var unstable_FormRadio = createComponent.createComponent({
  as: "input",
  useHook: unstable_useFormRadio
});

exports.unstable_FormRadio = unstable_FormRadio;
exports.unstable_useFormRadio = unstable_useFormRadio;
