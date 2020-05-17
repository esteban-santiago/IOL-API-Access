'use strict';

require("dotenv").config();
const api_client = require('axios');
const StringHelper = require('../helpers/string');
let stringHelper = new StringHelper();

class StockClient {
    
    constructor(stock) { 
        this.stock = stock;
        //this.token = token;
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

    async getBasicData(token) {
        return await api_client.get(
                stringHelper.replaceInUrl(process.env.IOL_API_GET_STOCK, 
                this.stock.getMarket(), 
                this.stock.getTicker()),
                {'headers': this.getHeaders(token)}
                 //{ 'headers': this.headers }
            ).catch(error => {
                return error;
        });
    };

    getPriceData() {
        return api_client.get(
                stringHelper.replaceInUrl(process.env.IOL_API_PRICE_STOCK, 
                this.stock.getMarket(), 
                this.stock.getTicker()), { 'headers': this.headers }
            ).catch(error => console.error(error));
    };

    buy(quantity, price, validity) {
        this.body = {
            mercado: this.stock.getMarket(),
            simbolo: this.stock.getTicker(),
            cantidad: quantity,
            precio: price,
            plazo: this.stock.getTerm(),
            validez: validity //'2020-05-11'
        };
        return api_client.post(process.env.IOL_API_BUY_STOCK, body, { 'headers': this.headers }
            ).catch(error => console.log(error));
    };

    getOptionsList() {
        return api_client.get(stringHelper.replaceInUrl(process.env.IOL_API_GET_OPTIONS, stock.mercado, stock.getTicker()),
            { 'headers': this.headers }
        ).catch(error => {
            console.error(error);
        });
    };
}

module.exports = StockClient;