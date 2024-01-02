#!/usr/bin/node

/**
 * Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.
 * And don’t forget that var is not ES6-friendly.
*/

const appendToEachArrayValue = (array, appendString) => {
  for (const idx in array) array[idx] = appendString + array[idx];
  return array;
};

export default appendToEachArrayValue;
