class Stock {

  constructor(basic) {
    this.setBasicData(basic);
  }

  setBasicData(basic) {
    this.basic = basic;
  }

  getBasicData() {
    return this.basic;
  }

  getBasicProperty(property) {
    return this.basic[property];
  }

  getPriceData() {
    return this.prices;
  }

  setPriceData(price) {
    this.price = price;
  }

  getOptions() {
    return this.prices;
  }

  setOptions(options) {
    this.options = options;
  }


}

module.exports = { Stock };