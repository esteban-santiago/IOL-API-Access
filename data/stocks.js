'use strict';

const stocks = [ {
    simbolo: "COME",
    descripcion: "Sociedad Comercial Del Plata",
    pais: "argentina",
    mercado: "bcba",
    tipo: "ACCIONES",
    plazo: "t2",
    moneda: "peso_Argentino"
  }, {
    simbolo: "MELI",
    descripcion: "Mercadolibre",
    pais: "argentina",
    mercado: "bcba",
    tipo: "CEDEARS",
    plazo: "t2",
    moneda: "peso_Argentino"
  }
]


function getStockProperties(ticker) {
  return stocks.find(element => element.simbolo == ticker);
}

exports.getStockProperties = getStockProperties;