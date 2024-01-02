#!/usr/bin/node

/**
 * Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.
 * And don’t forget that var is not ES6-friendly.
*/

const appendToEachArrayValue = (array, appendString) => {
  const resoult = [];

  for (const value of array) resoult.push(appendString + value);

  return resoult;
};

export default appendToEachArrayValue;
