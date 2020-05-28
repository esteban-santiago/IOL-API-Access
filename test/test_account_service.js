'use strict';

import chai from 'chai';

const { expect } = chai;
const { assert } = chai;


import AuthService from '../services/auth/auth_service.js';
import AccountService from '../services/account/account_service.js';

describe('#AccountService', function () {
  describe('#1 - getAccountStatus()', () => {
    it('should return user account data', () => {
      return new AuthService().getToken().then((token) =>
        new AccountService().getAccountStatus(token).then((
          status) => assert.equal(status.cuentas[0].estado, 'operable'))
      );
    });
  });
  describe('#2 - getAccountPortfolio(country)', () => {
    it('#2.1 - should return user portfolio for argentina', () => {
      return new AuthService().getToken().then((token) =>
        new AccountService().getAccountPortfolio(token, 'argentina').then((
          portfolio) => assert.equal(portfolio.pais, 'argentina'))
      );
    });
    it('#2.2 - should return user portfolio for estados_unidos', () => {
      return new AuthService().getToken().then((token) =>
        new AccountService().getAccountPortfolio(token, 'estados_unidos').then((
          portfolio) => assert.equal(portfolio.pais, 'estados_Unidos'))
      );
    });
  });
});
