'use strict';

const api_client = require('axios');
require('dotenv').config();
var constants = require('../lib/constants');
let { Token } = require('../models/auth/token');
let { AuthClientException } = require('../models/system/exceptions/auth_client_exception');

class AuthClient {
    
    constructor() {
    }

    static _getHeaders() {
        return {
            Accept: 'application/json',
            Authorization: 'auth'
        };
    }

    static _getBody() {
        return `username=${process.env.IOL_USER}&` +
            `password=${process.env.IOL_PASSWORD}&` +
            `grant_type=` + constants.IOL_GRANT_TYPE; //${process.env.IOL_GRANT_TYPE}

    }


    static getToken() {
        return api_client.post(
            constants.IOL_API_TOKEN,
            this._getBody(),
            this._getHeaders()
        ).then(
            response => new Token(response.data.access_token, response.data.refresh_token)
        ).catch(error => {
            throw new AuthClientException(error.response.status,
                error.response.statusText,
                error.response.data.error,
                error.response.data.error_description);
        });
    }


}
module.exports = AuthClient; 