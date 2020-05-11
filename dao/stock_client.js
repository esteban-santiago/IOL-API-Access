'use strict';

require("dotenv").config();
const api_client = require('axios');
const helper = require('../helpers/replace');

class StockClient {
    constructor(stock, token) {
        /*
            simbolo: "COME",
            descripcion: "Sociedad Comercial Del Plata",
            pais: "argentina",
            mercado: "bcba",
            tipo: "ACCIONES",
            plazo: "t2",
            moneda: "peso_Argentino"
        */
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
            return api_client.get(helper.replaceInUrl(process.env.IOL_API_GET_OPTIONS, /*stock.mercado, stock.simbolo*/'bcba','come'), { 'headers': this.headers }
            ).catch(error => {
                console.log(error);
            });
        };
    }
}



//module.exports = StockClient;

const stock = new StockClient('COME', '1wA87HLdxQ0Hsc4qrGzyRwpYOKjQe7iodv9gLgj8l0eoN_zJ_QYa9seooi-nEg9HNrZCXHLLOPdB065Jkr82eUFEhZkebTgCtOCi_Le21TzFzyZyNhNiGa4YhgQyR3auLxxi60K01p7zivEMaxCukdri7AG4HYWwn9FAoxsVhx2mDQJ--jXJPOO6NmYbeDhQy6qszo8x9WQaIiVpD0uhJS1ggBUs73BzoODHETH5w_83G3crfw5MvlRC89oBrqGVAk1hTTmiY1zMlGtBq8r05AVbiyMELPUVPyFImMvJw1wjByGPrNrgOKUJnd-4D-EdjtGcJInk07bSLuMjssl7m-N4zjE6hmTKbGmLkrWCe_lA0M3vXL-KR6xiA7Ft8wg7');
stock.getOptionsList().then(resp => console.log(resp.data));

//"{ mercado: 'bCBA', simbolo: 'COME', cantidad: 200, precio: 2, plazo: 't0', validez: '2020-05-11T15:00:00.000Z' }"