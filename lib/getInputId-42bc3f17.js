'use strict';

var formatInputName = require('./formatInputName-0ecca8fe.js');

function getInputId(name, baseId, suffix) {
  if (suffix === void 0) {
    suffix = "";
  }

  if (baseId) {
    return baseId + "-" + formatInputName.formatInputName(name, "-") + suffix;
  }

  return undefined;
}

exports.getInputId = getInputId;
