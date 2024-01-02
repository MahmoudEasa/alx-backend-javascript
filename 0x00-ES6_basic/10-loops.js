#!/usr/bin/node

/**
 * Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.
 * And don’t forget that var is not ES6-friendly.
*/

const appendToEachArrayValue = (array, appendString) => {
  const copyArr = [...array];
  for (const idx in copyArr) {
    if (copyArr[idx]) copyArr[idx] = appendString + array[idx];
  }
  return copyArr;
};

export default appendToEachArrayValue;
