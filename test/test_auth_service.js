const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();let auth = require('../services/auth/auth_service');

describe('#AuthClient', function() {
  describe('#1 - getToken()', () => {
    it('should return token to IOL', () => {
        return auth.getToken().then( token => {
            //token.getAccess().should.to.have.length.above(0);
            assert.isAbove(token.getAccess().length, 1);
         } 
        );
    });
  });
});
