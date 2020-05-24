'use strict';

import axios from 'axios';
import constants from '../../lib/constants.js';
import AccountServiceException from './exceptions/account_service_exception.js';
import StringHelper from '../../helpers/string.js';

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

    getAccountStatus(token) {
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

    }


}

export default Account;