import 'react';
import 'reakit-utils/useId';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import { useBox } from '../Box/Box.js';
import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-4b09989f.js';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/useSealedState';
import 'reakit-utils/useUpdateEffect';
import 'reakit-utils/isPromise';
import 'reakit-utils/isEmpty';
import { unstable_useFormState } from './FormState.js';
import 'reakit-utils/isObject';
import './utils/setAllIn.js';
import { unstable_getIn } from './utils/getIn.js';
import 'reakit-utils/toArray';
import 'reakit-utils/isInteger';
import './utils/setIn.js';
import '../formatInputName-80808a2f.js';
import '../getInputId-c48e116d.js';
import { s as shouldShowError, g as getMessageId } from '../shouldShowError-bcf0431c.js';

function shouldShowMessage(_ref, name) {
  var touched = _ref.touched,
      messages = _ref.messages;
  return Boolean(unstable_getIn(touched, name) && unstable_getIn(messages, name));
}

var unstable_useFormMessage = createHook({
  name: "FormMessage",
  compose: useBox,
  useState: unstable_useFormState,
  keys: ["name"],
  useProps: function useProps(options, htmlProps) {
    var children = shouldShowError(options, options.name) ? unstable_getIn(options.errors, options.name) : undefined;
    children = children || (shouldShowMessage(options, options.name) ? unstable_getIn(options.messages, options.name) : undefined);
    return _objectSpread2({
      role: "alert",
      id: getMessageId(options.name, options.baseId),
      children: children
    }, htmlProps);
  }
});
var unstable_FormMessage = createComponent({
  as: "div",
  useHook: unstable_useFormMessage
});

export { unstable_FormMessage, unstable_useFormMessage };
