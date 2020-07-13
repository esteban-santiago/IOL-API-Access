'use strict';

import axios from 'axios';
//import dotenv from 'dotenv'; dotenv.config();
import constants from '../../lib/constants.js';
import OperationServiceException from './exceptions/operation_service_exception.js';
import StringHelper from '../../helpers/string.js';
import Operation from '../../models/operations/operation.js';

export default class StockOperationService {
    constructor() {
        if(StockOperationService.instance instanceof StockOperationService)
            return StockOperationService.instance;

        Object.freeze(this);
        StockOperationService.instance = this; //c'est une variable globale ou semi globale
    }

     _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    getBasicData(token, operation) {
        return axios.get(
            StringHelper.replaceInUrl(constants.IOL_API_OPERATION,
                operation),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then((operation) => operation.data)
            .catch(error => {
                throw new OperationServiceException(
                    'OperationService.getBasicData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    }

    buy(token, stock, quantity, price, validity) {
        const body = {
            mercado: stock.getBasicProperty('mercado'),
            simbolo: stock.getBasicProperty('simbolo'),
            cantidad: quantity,
            precio: price,
            plazo: stock.getBasicProperty('plazo'),
            validez: validity.toISOString() //'2020-05-11'
        };
        return axios.post(constants.IOL_API_OPERATION_BUY,
            body,
            { 'headers': this._getHeaders(token.getAccess()) })
            .then(
                (resp) => 'numeroOperacion' in resp.data ? new Operation(resp.data) : console.log(resp)
            )
            .catch(error => {
                throw new OperationServiceException(
                    'OperationService.buy() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    };

    cancel(token, operation) { ///api/v2/operaciones/
        return axios.delete(
            StringHelper.replaceInUrl(constants.IOL_API_OPERATION,
                operation),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then((operation) => operation.data)
            .catch(error => {
                throw new OperationServiceException(
                    'OperationService.getBasicData() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });

    }
}
