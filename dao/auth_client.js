'use strict';

const api_client = require('axios');
require("dotenv").config();

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
            
    getToken() {
            return api_client.post(
                process.env.IOL_API_TOKEN, 
                this.body, 
                this.headers
                ).catch(error => {
                    error.data = {access_token: ''};
                    return error;
                });
        }
}
module.exports = AuthClient ; 