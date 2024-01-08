/**
 * updateUniqueItems - That returns an updated map
 *   for all items with initial quantity at 1
 * @map: Map
 *
 * Return: Updated map
 */

const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  return (Array.from(map).map((el) => {
    if (map.get(el[0]) === 1) map.set(el[0], 100);
    return (el);
  }));
};

export default updateUniqueItems;
