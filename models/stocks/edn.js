import Stock from './stock.js';

export default class EDN extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'EDN',
      descripcion: 'Edenor',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

