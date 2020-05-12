class Stock {

    constructor() {}

    getTicker() {}

    getDescription() {}

    getCountry() {}

    getMarket() {}

    getType() {}

    getTerm() {}

    getCurrency() {}

}

class COME extends Stock {
  constructor() {
    super();
  }

  getTicker() {
    return 'COME'
  };

  getDescription() {
    return 'Sociedad Comercial Del Plata'
  };

  getCountry() {
    return 'argentina'
  };

  getMarket() {
    return 'bcba'
  };

  getType() {
    return 'ACCIONES'
  };

  getTerm() {
    return 't2'
  };

  getCurrency() {
    return 'peso_Argentino'
  };

}


class MELI extends Stock {
  constructor() {
    super();
   }

  getTicker() {
    return 'MELI'
  };

  getDescription() {
    return 'Sociedad Comercial Del Plata'
  };

  getCountry() {
    return 'argentina'
  };

  getMarket() {
    return 'bcba'
  };

  getType() {
    return 'CEDEARS'
  };

  getTerm() {
    return 't2'
  };

  getCurrency() {
    return 'peso_Argentino'
  };

}

module.exports = { Stock, COME, MELI };