import Currency from './3-currency';

export default class Pricing {
  // amount: Number
  // currency: Currency
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return (this._amount);
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return (this._currency);
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    // amount: Number
    // conversionRate: Number
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return (amount * conversionRate);
  }
}
