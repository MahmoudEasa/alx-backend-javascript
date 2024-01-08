/**
 * createInt8TypedArray - returns a new ArrayBuffer
 *    with an Int8 value at a specific position
 * @length: Number
 * @position: Number
 * @value: Number
 *
 * Return: a new ArrayBuffer
*/

const createInt8TypedArray = (length, position, value) => {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;

  return (new DataView(buffer));
};

export default createInt8TypedArray;
