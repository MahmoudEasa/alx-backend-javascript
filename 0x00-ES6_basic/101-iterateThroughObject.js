#!/usr/bin/node

/**
 * Finally, write a function named iterateThroughObject.
 * The function’s parameter reportWithIterator is the return
 * value from createIteratorObject.
 *
 * It should return every employee name in a string, separated by |
*/

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
