'use strict';

import axios from 'axios';
//import dotenv from 'dotenv'; dotenv.config();
import constants from '../../lib/constants.js';

import StockServiceException from './exceptions/stock_service_exception.js';
import StringHelper from '../../helpers/string.js';

export default class StockDataService {
    constructor() {
        if(StockDataService.instance instanceof StockDataService)
            return StockDataService.instance;

        Object.freeze(this);
        StockDataService.instance = this; //c'est une variable globale ou semi globale
    }

    _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    getBasicData(token, stock) {
        return axios.get(
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

    getPriceData(token, stock) {
        return axios.get(
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

    getOptionList(token, stock) {
        return axios.get(
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
    getCallList(token, stock) {
        return this.getOptionList(token, stock).then((calls) =>
            calls.filter((e) => e.simbolo.substring(3, 4) === constants.OPTION_CALL_FLAG ? e : null)
        );
    }

    getPutList(token, stock) {
        return this.getOptionList(token, stock).then((puts) =>
            puts.filter((e) => e.simbolo.substring(3, 4) === constants.OPTION_PUT_FLAG ? e : null)
        );
    }
}
