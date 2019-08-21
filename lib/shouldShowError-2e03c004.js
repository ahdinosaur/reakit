'use strict';

var getIn = require('./Form/utils/getIn.js');
var getInputId = require('./getInputId-42bc3f17.js');

function getMessageId(name, baseId) {
  return getInputId.getInputId(name, baseId, "-message");
}

function shouldShowError(_ref, name) {
  var touched = _ref.touched,
      errors = _ref.errors;
  return Boolean(getIn.unstable_getIn(touched, name) && getIn.unstable_getIn(errors, name));
}

exports.getMessageId = getMessageId;
exports.shouldShowError = shouldShowError;
