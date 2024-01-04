class Car {
  // brand: String
  // motor: String
  // color: String
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return (new this.constructor(this._brand, this._motor, this._color));
  }
}

export default Car;
