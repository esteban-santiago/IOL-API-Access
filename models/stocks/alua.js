import Stock from './stock.js';

export default class ALUA extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'ALUA',
      descripcion: 'Aluminios argentinos',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

