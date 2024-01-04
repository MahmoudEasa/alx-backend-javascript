export default class Airport {
  // name: String
  // code: String
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return (this._code);
  }
}
