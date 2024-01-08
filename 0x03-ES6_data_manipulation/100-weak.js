export const weakMap = new WeakMap();

const MAX_ENDPOINT = 5;

/**
 * Increase the count for the given endpoint in the weakMap
 * and throw an error if the count exceeds the maximum limit.
 * @param {object} endpoint - The API endpoint.
 * @throws {Error} - If the count for the endpoint exceeds the maximum limit.
 */
export function queryAPI(endpoint) {
  // If the endpoint is not present in the weakMap, initialize it with a count of 0.
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint in the weakMap.
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // Check if the count for the endpoint exceeds the maximum limit.
  if (weakMap.get(endpoint) >= MAX_ENDPOINT) {
    throw new Error('Endpoint load is high');
  }
}







/**
 * weakMap - instance of WeakMap
 */

//const weakMap = new WeakMap();

/**
 * queryAPI - Track within the weakMap the number of times
 *   queryAPI is called for each endpoint
 * @endPoint: Object
 */

//const queryAPI = (endPoint) => {
  //const endPointCount = (weakMap.get(endPoint) + 1) || 1;

  //if (endPointCount === 5) throw new Error('Endpoint load is high');

  //weakMap.set(endPoint, endPointCount);
//};

//export { weakMap, queryAPI };
