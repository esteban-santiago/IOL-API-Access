'use strict';

import axios from 'axios';
import constants from '../../lib/constants.js';
import AccountServiceException from './exceptions/account_service_exception.js';
import StringHelper from '../../helpers/string.js';

class AccountService {
    constructor() {
        if (AccountService.instance instanceof AccountService)
            return AccountService.instance;

        Object.freeze(this);
        AccountService.instance = this; //c'est une variable globale ou semi globale
    }

    _getHeaders(token) {
        return {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        };
    }

    getAccountStatus(token) {
        return axios.get(
            constants.IOL_API_ACCOUNT_STATUS,
            { 'headers': this._getHeaders(token.getAccess()) })
            .then((status) => status.data)
            .catch(error => {
                throw new AccountServiceException(
                    'AccountService.getAccountStatus() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    }

    getAccountPortfolio(token, country) {
        return axios.get(
            StringHelper.replaceInUrl(constants.IOL_API_ACCOUNT_PORTFOLIO,
                country),
            { 'headers': this._getHeaders(token.getAccess()) })
            .then((portafolio) => portafolio.data)
            .catch(error => {
                throw new AccountServiceException(
                    'AccountService.getAccountPortfolio() error.',
                    error.response.statusText,
                    error.response.status,
                    error.response.config.url);
            });
    }

}

export default AccountService;