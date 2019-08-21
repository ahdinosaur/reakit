'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('reakit-utils/useId');
var createComponent = require('reakit-system/createComponent');
var createHook = require('reakit-system/createHook');
var Box = require('../Box/Box.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
require('reakit-utils/useLiveRef');
var useAllCallbacks = require('reakit-utils/useAllCallbacks');
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

var unstable_useForm = createHook.createHook({
  name: "Form",
  compose: Box.useBox,
  useState: FormState.unstable_useFormState,
  useProps: function useProps(options, _ref) {
    var htmlOnSubmit = _ref.onSubmit,
        htmlProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["onSubmit"]);

    var onSubmit = React.useCallback(function (event) {
      event.preventDefault();
      options.submit();
    }, [options.submit]);
    return _rollupPluginBabelHelpers._objectSpread2({
      role: "form",
      noValidate: true,
      onSubmit: useAllCallbacks.useAllCallbacks(onSubmit, htmlOnSubmit)
    }, htmlProps);
  }
});
var unstable_Form = createComponent.createComponent({
  as: "form",
  useHook: unstable_useForm
});

exports.unstable_Form = unstable_Form;
exports.unstable_useForm = unstable_useForm;
