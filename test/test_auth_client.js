assert = require('assert');
expect = require('chai').expect;
should = require('chai').should();

let auth = require('../dao/auth_client');

describe('AuthClient', function() {
  describe('#getToken()', () => {
    it('should return token to IOL', () => {
        return auth.getToken().then( token => {
            //console.log(token.getAccess());
            token.getAccess().should.to.have.length.above(0);

         } 
        );
    });
  });
});
