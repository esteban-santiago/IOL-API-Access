assert = require('assert');
expect = require('chai').expect;
should = require('chai').should();

const AuthClient = require('../dao/auth_client');
let auth = new AuthClient();

describe('AuthClient', function() {
  describe('#getToken()', () => {
    it('should return token to IOL', () => {
        return auth.getToken().then( token => {
            //log(response.response.data);
            token.getAccess().should.to.have.length.above(0);

         } 
        );
    });
  });
});
