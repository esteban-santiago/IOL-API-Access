class Stock {

  constructor(basic) {
    this.setBasicData(basic);
  }

  _constructor() {
    this.basic = {
      simbolo: '',
      descripcion: '',
      pais: '',
      mercado: '',
      tipo: '',
      plazo: '',
      moneda: ''
    };
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

  setBasicProperty(property, data) {
    this.basic[property] = data;
  }

  setSimbolo(simbolo) {
    this.basic[simbolo] = simbolo;
  }

  setMercado(mercado) {
    this.basic[mercado] = mercado;
  }

}

export default Stock;