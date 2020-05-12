'use strict';

const stocks = require("../data/stocks");

class Stock {
    constructor(ticker) {

        this._ticker = ticker;
    }

    getProperties() {
        return stocks.getStockProperties(ticker);
    }

    getTicker() {
        return stocks.getStockProperties(ticker).Ticker;
    }

    getMercado() {
        return stocks.getStockProperties(ticker).mercado;
    }

    getPlazo() {
        return stocks.getStockProperties(ticker).plazo;
    }

}

module.exports = { Stock }; 