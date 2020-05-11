'use strict';

const stocks = require("../data/stocks");

class Stock {
    constructor(ticker) {

        this._ticker = ticker;
    }

    getProperties() {
        return stocks.getStockProperties(ticker);
    }

    getSimbolo() {
        return stocks.getStockProperties(ticker).simbolo;
    }

    getMercado() {
        return stocks.getStockProperties(ticker).mercado;
    }

    getPlazo() {
        return stocks.getStockProperties(ticker).plazo;
    }

}

module.exports = Stock; 