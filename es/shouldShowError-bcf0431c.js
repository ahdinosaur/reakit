import { unstable_getIn } from './Form/utils/getIn.js';
import { g as getInputId } from './getInputId-c48e116d.js';

function getMessageId(name, baseId) {
  return getInputId(name, baseId, "-message");
}

function shouldShowError(_ref, name) {
  var touched = _ref.touched,
      errors = _ref.errors;
  return Boolean(unstable_getIn(touched, name) && unstable_getIn(errors, name));
}

export { getMessageId as g, shouldShowError as s };