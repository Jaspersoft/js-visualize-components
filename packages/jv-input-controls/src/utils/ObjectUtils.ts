/**
 * Checks if the object doesn't have any keys. If the object is null or undefined, it returns true.
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj: any): boolean => {
  if (obj === null || obj === undefined) {
    return true;
  }
  return Object.keys(obj).length === 0;
};
