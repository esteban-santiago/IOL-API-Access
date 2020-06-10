import Stock from './stock.js';


export default class GGAL extends Stock {
  constructor() {
    super();
    super.basic = {
      simbolo: 'GGAL',
      descripcion: 'Grupo Financiero Galicia',
      pais: 'argentina',
      mercado: 'bcba',
      tipo: 'ACCIONES',
      plazo: 't2',
      moneda: 'peso_Argentino'
    }
  }

}
