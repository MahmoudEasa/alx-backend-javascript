const appendToEachArrayValue = (array, appendString) => {
  const resoult = [];

  for (const value of array) resoult.push(appendString + value);

  return resoult;
};

export default appendToEachArrayValue;
