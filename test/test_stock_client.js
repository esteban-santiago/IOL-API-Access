assert = require('assert');
expect = require('chai').expect;
should = require('chai').should();

const AuthClient = require('../dao/auth_client');
let auth = new AuthClient();

describe('Stock', function() {
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
