import Car from './10-car';

class EVCar extends Car {
  // brand: String
  // motor: String
  // color: String
  // range: String
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return (this._range);
  }
}

export default EVCar;
