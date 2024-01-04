export default class Currency {
  // code: String
  // name: String
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return (this._code);
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return (this._name);
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
