import { g as getInputId } from './getInputId-c48e116d.js';

function getLabelId(name, baseId) {
  return getInputId(name, baseId, "-label");
}

export { getLabelId as g };
