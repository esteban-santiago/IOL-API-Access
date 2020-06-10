'use strict';

import axios from 'axios';
//import dotenv from 'dotenv'; dotenv.config();
import constants from '../../lib/constants.js';

import Stock from '../../models/stocks/stock.js';
import StockServiceException from './exceptions/stock_service_exception.js';
import StringHelper from '../../helpers/string.js';

export default class StockDataService {
    constructor() {
        if (StockDataService.instance instanceof StockDataService)
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

    getData(token, market, ticker) {
        let stock = new Stock();
        stock.setBasicProperty('mercado',market);
        stock.setBasicProperty('simbolo',ticker);
        return this.getBasicData(token, stock);
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

    getPriceBox(token, stock) {
        return axios.get(
            StringHelper.replaceInUrl(constants.IOL_API_PRICE_BOX,
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

    getLastYearHistoricalData(token,stock) {
        let dateTo = new Date();
        let dateFrom = new Date();
        dateFrom.setFullYear(dateTo.getFullYear()-1);
        return this.getHistoricalData(token, stock, dateFrom.toISOString().split('T')[0], dateTo.toISOString().split('T')[0]);
    }

    getLastMonthHistoricalData(token,stock) {
        let dateTo = new Date();
        let dateFrom = new Date();
        dateFrom.setMonth(dateTo.getMonth()-1);
        return this.getHistoricalData(token, stock, dateFrom.toISOString().split('T')[0], dateTo.toISOString().split('T')[0]);
    }

    getXLastsMonthsHistoricalData(token,stock, months) {
        let dateTo = new Date();
        let dateFrom = new Date();
        dateFrom.setMonth(dateTo.getMonth()-months);
        return this.getHistoricalData(token, stock, dateFrom.toISOString().split('T')[0], dateTo.toISOString().split('T')[0]);
    }

    getHistoricalData(token, stock, dateFrom, dateTo, ajusted = 'ajustada') {
        return axios.get(
            StringHelper.replaceInUrl(constants.IOL_API_STOCK_HISTORY_GET,
                stock.getBasicProperty('mercado'),
                stock.getBasicProperty('simbolo'),
                dateFrom, //'2019-05-01',//fechaDesde,
                dateTo,//'2020-05-30',//fechaHasta,
                ajusted),//ajustada),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then(
                (history) => history.data
            )
            .catch(error => {
                console.log(error);
                /*
                throw new StockServiceException(
                    'StockDataService.getHistoricalData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
                    */
            });

    }
}
