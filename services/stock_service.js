'use strict';

require("dotenv").config();

let { Stock } = require('../models/stocks/stock');
let { Operation } = require('../models/operations/operation');
const { StockClient } = require('../dao/stock_client');
let { StockClientException } = require('../models/system/exceptions/stock_client_exception');


class StockService {

    constructor(stock) {
        this.stock = stock;
    }

    getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    getProperties() {
        return this.stock;
    }

    getBasicData(token) {
        return StockClient.get(token, process.env.IOL_API_GET_STOCK, this.stock)
            .then((stock) =>
                new Stock(stock.data)
            )
            .catch(error => {
                console.log(error);
                throw new StockClientException(
                    'StockClient.getBasicData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    }

    getPriceData(token) { //process.env.IOL_API_PRICE_STOCK
        return StockClient.get(token, process.env.IOL_API_PRICE_STOCK, this.stock)
            .then(
                (stock) => {
                    this.stock.setPriceData(stock.data);
                    return this.stock;
                }
            )
            .catch(error => {
                throw new StockClientException(
                    'StockClient.getPriceData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    };

    buy(token, quantity, price, validity) {
        const body = {
            mercado: this.stock.getBasicProperty('mercado'),
            simbolo: this.stock.getBasicProperty('simbolo'),
            cantidad: quantity,
            precio: price,
            plazo: this.stock.getBasicProperty('plazo'),
            validez: validity.toISOString() //'2020-05-11' //dateObj.toISOString()
        };
        return StockClient.post(token, process.env.IOL_API_BUY_STOCK, body, this.stock)
            .then(
                (resp) => {
                    let trx;
                    if ('numeroOperacion' in resp.data) {
                        trx = new Operation(resp.data);
                    }
                    else {
                        console.log(resp);
                    }
                    return trx;
                }
            )
            .catch(error => {
                console.log(error);
                /*
                throw new StockClientException(
                    'StockClient.buy() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
                    */
            });
    };

    getOptionsList(token) {
        return StockClient.get(token, process.env.IOL_API_GET_OPTIONS, this.stock)
            .then(
                (stock) => {
                    this.stock.setOptions(stock.data);
                    return this.stock;
                }
            )
            .catch(error => {
                throw new StockClientException(
                    'StockClient.getOptionsList() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    };

}

module.exports = { StockService };