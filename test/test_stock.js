assert = require('assert');
expect = require('chai').expect;
should = require('chai').should();
let { COME, MELI } = require("../models/stocks/stock");

let come = new COME();
let meli = new MELI();

//console.log(stock);
//  console.log(come.getTicker());
//  console.log(meli.getTicker());

 
describe('Stock COME', function () {
    describe('#getTicker()', () => {
        it('should return COME Stock ticker', () => {
            come.getTicker().should.to.have.length.above(0);
        });
    });
});

describe('Stock MELI', function () {
    describe('#getTicker()', () => {
        it('should return MELI Stock ticker', () => {
            meli.getTicker().should.to.have.length.above(0);
        });
    });
});
