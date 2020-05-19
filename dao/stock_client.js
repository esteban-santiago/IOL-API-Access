'use strict';

require("dotenv").config();
const api_client = require('axios');
const StringHelper = require('../helpers/string');
let { StockClientException } = require('../models/system/exceptions/stock_client_exception');


class StockClient {

    static _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    static get(token, url, stock) {
        return api_client.get(
            StringHelper.replaceInUrl(url,
                stock.getBasicProperty('mercado'),
                stock.getBasicProperty('simbolo')),
            { 'headers': this._getHeaders(token.getAccess()) });
    }

    static post(token, url, body, stock) {
        return api_client.post(url, body,
            { 'headers': this._getHeaders(token.getAccess()) })    
    }

    put() {
        return api_client.put();
    }

    delete() {
        return api_client.delete();
    }

}

module.exports = { StockClient };