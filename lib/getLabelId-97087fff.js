'use strict';

var getInputId = require('./getInputId-42bc3f17.js');

function getLabelId(name, baseId) {
  return getInputId.getInputId(name, baseId, "-label");
}

exports.getLabelId = getLabelId;
