'use strict';

import chai from 'chai';

const { expect } = chai;
const { assert } = chai;


import AuthService from '../services/auth/auth_service.js';

describe('#AuthClient', function() {
  describe('#1 - getToken()', () => {
    it('should return token to IOL', () => {
        return new AuthService().getToken().then( token => {
            assert.isAbove(token.getAccess().length, 1);
         } 
        );
    });
  });
});
