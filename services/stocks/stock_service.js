'use strict';

require("dotenv").config();
var constants = require('../../lib/constants');
const api_client = require('axios');
let { Stock } = require('../../models/stocks/stock');
let { Operation } = require('../../models/operations/operation');
let { StockServiceException } = require('./exceptions/stock_service_exception');
const StringHelper = require('../../helpers/string');

class StockService {

    static _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    static getBasicData(token, stock) {
        return api_client.get(
            StringHelper.replaceInUrl(constants.IOL_API_STOCK_GET,
                stock.getBasicProperty('mercado'),
                stock.getBasicProperty('simbolo')),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then((stock) => stock.data)
            .catch(error => {
                throw new StockServiceException(
                    'StockService.getBasicData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    }

    static getPriceData(token, stock) {
        return api_client.get(
            StringHelper.replaceInUrl(constants.IOL_API_STOCK_PRICE_GET,
                stock.getBasicProperty('mercado'),
                stock.getBasicProperty('simbolo')),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then(
                (stock) => stock.data
            )
            .catch(error => {
                throw new StockServiceException(
                    'StockService.getPriceData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    };

    static getOptionsList(token, stock) {
        return api_client.get(
            StringHelper.replaceInUrl(constants.IOL_API_OPTIONS_GET,
                stock.getBasicProperty('mercado'),
                stock.getBasicProperty('simbolo')),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then(
                (stock) => stock.data
            )
            .catch(error => {
                throw new StockServiceException(
                    'StockService.getOptionsList() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    };
    static getCallsList(token, stock) {
        return 
    }

    static getPutsCallList(token, stock) {
    }
}

module.exports = { StockService };