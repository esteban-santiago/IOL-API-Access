'use strict';

require("dotenv").config();
const api_client = require('axios');
const helper = require('../helpers/replace');

class StockClient {
    constructor(stock, token) {
        this.headers = {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };

        this.getBasicData = function () {
            api_client.get(helper.replaceInUrl(process.env.IOL_API_GET_STOCK, stock.mercado, stock.simbolo), { 'headers': this.headers }).then(resp => {
                console.log(resp);
            }).catch(error => {
                console.log(error);
            });
        };

        this.getPriceData = function () {
            return api_client.get(helper.replaceInUrl(process.env.IOL_API_PRICE_STOCK, stock.mercado, stock.simbolo), { 'headers': this.headers }).catch(error => {
                console.log(error);
            });
        };

        this.buy = function (quantity, price, validity) {
            const body = {
                mercado: stock.mercado,
                simbolo: stock.simbolo,
                cantidad: quantity,
                precio: price,
                plazo: stock.plazo,
                validez: validity //'2020-05-11'
            };
            return api_client.post(process.env.IOL_API_BUY_STOCK, body, { 'headers': this.headers }).catch(error => console.log(error));
        };

        this.getOptionsList = function () {
            return api_client.get(helper.replaceInUrl(process.env.IOL_API_GET_OPTIONS, stock.mercado, stock.simbolo), 
                { 'headers': this.headers }
            ).catch(error => {
                console.log(error);
            });
        };
    }
}