#!/usr/bin/node

/**
 * Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.
 * And don’t forget that var is not ES6-friendly.
*/

const appendToEachArrayValue = (array, appendString) => {
  const copyArr = [...array];
  for (const [idx, item] of copyArr.entries()) copyArr[idx] = appendString + item;

  return copyArr;
};

export default appendToEachArrayValue;
