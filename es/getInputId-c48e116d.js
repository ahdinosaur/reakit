import { f as formatInputName } from './formatInputName-80808a2f.js';

function getInputId(name, baseId, suffix) {
  if (suffix === void 0) {
    suffix = "";
  }

  if (baseId) {
    return baseId + "-" + formatInputName(name, "-") + suffix;
  }

  return undefined;
}

export { getInputId as g };
