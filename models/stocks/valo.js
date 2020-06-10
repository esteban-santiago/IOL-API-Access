import Stock from './stock.js';

export default class VALO extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'VALO',
      descripcion: 'Grupo Financiero Valores S.A.',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}

