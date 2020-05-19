let { Stock } = require('./stock');


class MELI extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'MELI',
      descripcion: 'Mercadolibre',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'CEDEARS',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

module.exports = { MELI };