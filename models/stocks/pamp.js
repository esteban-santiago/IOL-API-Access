import Stock from './stock.js';


export default class PAMP extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'PAMP',
      descripcion: 'Pampa Energía',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}
