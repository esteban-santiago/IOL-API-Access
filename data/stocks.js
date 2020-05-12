'use strict';

const stocks = [ {
    Ticker: "COME",
    Description: "Sociedad Comercial Del Plata",
    Country: "argentina",
    mercado: "bcba",
    tipo: "ACCIONES",
    plazo: "t2",
    moneda: "peso_Argentino"
  }, {
    Ticker: "MELI",
    Description: "Mercadolibre",
    Country: "argentina",
    mercado: "bcba",
    tipo: "CEDEARS",
    plazo: "t2",
    moneda: "peso_Argentino"
  }
]


function getStockProperties(ticker) {
  return stocks.find(element => element.Ticker == ticker);
}

exports.getStockProperties = getStockProperties;