/**
 * weakMap - instance of WeakMap
 */

const weakMap = new WeakMap();

/**
 * queryAPI - Track within the weakMap the number of times
 * queryAPI is called for each endpoint
 * @endPoint: Object
 */

const queryAPI = (endPoint) => {
  const endPointCount = (weakMap.get(endPoint) + 1) || 1;
  weakMap.set(endPoint, endPointCount);

  if (endPointCount === 5) throw new Error('Endpoint load is high');
};

export { weakMap, queryAPI };
