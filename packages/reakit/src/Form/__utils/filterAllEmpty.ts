// import { isObject } from "reakit-utils/isObject";

export function filterAllEmpty<T extends Record<any, any> | Array<any>>(
  object: T
): T {
  if (Array.isArray(object)) {
    return object.filter(value => {
      if (isPlainObject(value)) {
        return filterAllEmpty(value);
      }
      return true;
    }) as T;
  }

  const result = {} as T;
  const keys = Object.keys(object);

  for (const key of keys) {
    const k = key as keyof T;
    const value = object[k];
    result[k] = isPlainObject(value) ? filterAllEmpty(value) : object[k];
  }

  return result;
}

const getPrototype = Object.getPrototypeOf
const objectCtorString = Object.toString()

// Based on lodash/isPlainObject
function isPlainObject(val: any) {
  if (Object.prototype.toString.call(val).slice(8, -1) !== "Object") {
    return false
  }

  const proto = getPrototype(val)

  if (proto == null) {
    return true
  }

  return proto.constructor && proto.constructor.toString() === objectCtorString
}
