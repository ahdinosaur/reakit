'use strict';

var getInputId = require('./getInputId-42bc3f17.js');

function getPushButtonId(name, baseId) {
  return getInputId.getInputId(name, baseId, "-push");
}

exports.getPushButtonId = getPushButtonId;
