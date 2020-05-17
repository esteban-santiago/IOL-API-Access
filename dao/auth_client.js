'use strict';

const api_client = require('axios');
require('dotenv').config();
let { Token } = require('../models/auth/token');

let { AuthClientException } = require('../models/system/exceptions/auth_client_exception');

class AuthClient {
    headers = {
        Accept: 'application/json',
        Authorization: 'auth'
    };

    body = `username=${process.env.IOL_USER}&` +
        `password=${process.env.IOL_PASSWORD}&` +
        `grant_type=${process.env.IOL_GRANT_TYPE}`;

    constructor() {
    }

    async getToken() {
        return api_client.post(
            process.env.IOL_API_TOKEN,
            this.body,
            this.headers
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