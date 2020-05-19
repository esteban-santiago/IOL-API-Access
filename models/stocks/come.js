let { Stock } = require('./stock');

class COME extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'COME',
      descripcion: 'Sociedad Comercial Del Plata',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

module.exports = { COME };