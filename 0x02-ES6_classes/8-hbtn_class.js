class HolbertonClass {
  // size: Number
  // location: String
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return (this._location);
  }

  toNumber() {
    return (this._size);
  }

  valueOf() {
    return (this._size);
  }
}

export default HolbertonClass;
