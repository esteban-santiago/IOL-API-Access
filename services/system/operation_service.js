'use strict';

require("dotenv").config();
var constants = require('../../lib/constants');
const api_client = require('axios');
let { Operation } = require('../../models/operations/operation');
let { OperationServiceException } = require('./exceptions/operation_service_exception');
const StringHelper = require('../../helpers/string');

class OperationService {
    static _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    static getBasicData(token, operation) {
        return api_client.get(
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

    static buy(token, stock, quantity, price, validity) {
        const body = {
            mercado: stock.getBasicProperty('mercado'),
            simbolo: stock.getBasicProperty('simbolo'),
            cantidad: quantity,
            precio: price,
            plazo: stock.getBasicProperty('plazo'),
            validez: validity.toISOString() //'2020-05-11' //dateObj.toISOString()
        };
        return api_client.post(constants.IOL_API_OPERATION_BUY,
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

    static cancel(token, operation) { ///api/v2/operaciones/
        return api_client.delete(
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

module.exports = { OperationService };