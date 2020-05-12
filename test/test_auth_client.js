assert = require('assert');
expect = require('chai').expect;
should = require('chai').should();
log = console.log;

AuthClient = require('../dao/auth_client');
auth = new AuthClient();

describe('Auth', function() {
  describe('#getToken()', () => {
    it('should return token to IOL', () => {
        return auth.getToken().then( response => {
            //log(response.response.data);
            response.data.access_token.should.to.have.length.above(0);

         } 
        );
    });
  });
});
