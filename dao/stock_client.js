'use strict';

require("dotenv").config();
const api_client = require('axios');
const StringHelper = require('../helpers/string');
let stringHelper = new StringHelper();
let stockProperties = require('../data/stocks');

class StockClient {

    headers = {
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token
    };

    constructor(stock, token) { 
        this.stock = stock;
        this.token = token;
        console.log(stockProperties.getStockProperties('COME'));
        console.log();
    }

    getStockProperties(ticker) {
        return this.stock;
    }

    getBasicData() {
        api_client.get(stringHelper.replaceInUrl(process.env.IOL_API_GET_STOCK, stock.mercado, stock.getTicker())), { 'headers': this.headers }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    };

    getPriceData() {
        return api_client.get(stringHelper.replaceInUrl(process.env.IOL_API_PRICE_STOCK, stock.mercado, stock.getTicker()), { 'headers': this.headers }).catch(error => {
            console.log(error);
        });
    };

    buy(quantity, price, validity) {
        this.body = {
            mercado: stock.mercado,
            simbolo: stock.simbolo,
            cantidad: quantity,
            precio: price,
            plazo: stock.plazo,
            validez: validity //'2020-05-11'
        };
        return api_client.post(process.env.IOL_API_BUY_STOCK, body, { 'headers': this.headers }).catch(error => console.log(error));
    };

    getOptionsList() {
        return api_client.get(stringHelper.replaceInUrl(process.env.IOL_API_GET_OPTIONS, stock.mercado, stock.getTicker()),
            { 'headers': this.headers }
        ).catch(error => {
            console.log(error);
        });
    };
}

module.exports = StockClient;