import { g as getInputId } from './getInputId-c48e116d.js';

function getPushButtonId(name, baseId) {
  return getInputId(name, baseId, "-push");
}

export { getPushButtonId as g };
