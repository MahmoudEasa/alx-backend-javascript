/**
 * cleanSet - returns a string of all the set values
 *   that start with a specific string (startString)
 * @set: Set
 * @startString: String
 *
 * Return: String
 */

const cleanSet = (set, startString) => {
  if (!(set instanceof Set) || (typeof startString !== 'string')) return ('');

  const startStringLen = startString.length;

  if (!startStringLen) return ('');

  return (Array.from(set).map((el) => {
    if (!el || el.length < startStringLen) return (null);

    const start = el.slice(0, startStringLen);
    if (start === startString) {
      return (el.slice(startStringLen));
    }

    return (null);
  }).filter((el) => el)).join('-');
};

export default cleanSet;
