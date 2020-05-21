const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

let auth = require('../services/auth/auth_service');
let { StockService } = require('../services/stocks/stock_service');
let { COME } = require('../models/stocks/come');
let come = new COME();

describe('#Stock COME', () => {
    describe('#1 - getBasicData()', () => {
        it('should return Basic data for Stock', () => {
            return auth.getToken().then((token) =>
                StockService.getBasicData(token, come).then((stock) => assert.equal(stock.simbolo, 'COME'))
            );
        });
    });
    describe('#2 - getPriceData()', () => {
        it('should return Price data for Stock', () => {
            return auth.getToken().then((token) => {
                return StockService.getPriceData(token, come).then((price) => assert.isAbove(price.ultimoPrecio, 0));
            }
            );
        });
    });
    describe('#3 - getOptionsList()', () => {
        it('should return Price data for Stock', () => {
            return auth.getToken().then((token) => {
                return StockService.getOptionsList(token, come).then((options) => assert.equal(options[0].tipo, 'OPCIONES'));
            }
            )
        });
    });
});
