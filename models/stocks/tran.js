import Stock from './stock.js';

export default class TRAN extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'TRAN',
      descripcion: 'Transener',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

