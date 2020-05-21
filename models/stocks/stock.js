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

}

module.exports = { Stock };