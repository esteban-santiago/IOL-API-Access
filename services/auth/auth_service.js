'use strict';

import axios from 'axios';
import dotenv from 'dotenv'; dotenv.config();
import constants from '../../lib/constants.js';
import Token from '../../models/auth/token.js';
import AuthServiceException from './exceptions/auth_service_exception.js';

class AuthService {

    constructor() {
        if(AuthService.instance instanceof AuthService)
            return AuthService.instance;

        Object.freeze(this);
        AuthService.instance = this; //c'est une variable globale ou semi globale
    }

    _getHeaders() {
        return {
            Accept: 'application/json',
            Authorization: 'auth'
        };
    }

    _getBody() {
        return `username=${process.env.IOL_USER}&` +
            `password=${process.env.IOL_PASSWORD}&` +
            `grant_type=${constants.IOL_GRANT_TYPE}`; //${process.env.IOL_GRANT_TYPE}

    }

    getToken() {
        return axios.post(
            constants.IOL_API_TOKEN,
            this._getBody(),
            this._getHeaders()
        ).then(
            response => new Token(response.data.access_token, response.data.refresh_token)
        ).catch(error => {
            throw new AuthServiceException(error.response.status,
                error.response.statusText,
                error.response.data.error,
                error.response.data.error_description);
        });
    }

}

export default AuthService;

//module.exports = {AuthService}; 