'use strict';

import chai from 'chai';

const { expect } = chai;
const { assert } = chai;

//import { should, expect } from 'chai';
//const should = require('chai').should();

import AuthService from '../services/auth/auth_service.js';
import StockService from '../services/stocks/stock_service.js';
import COME from '../models/stocks/come.js';
let come = new COME();

describe('#Stock COME', () => {
    describe('#1 - getBasicData()', () => {
        it(`should return Basic data for Stock ${come.getBasicProperty('simbolo')}`, () => {
            return new AuthService().getToken().then((token) =>
                new StockService().getDataService().getBasicData(token, come).then((
                    stock) => assert.equal(stock.simbolo, 'COME'))
            );
        });
    });
    describe('#2 - getPriceData()', () => {
        it(`should return Price data for Stock ${come.getBasicProperty('simbolo')}`, () => {
            return new AuthService().getToken().then((token) => {
                new StockService().getDataService().getPriceData(token, come).then((price) => assert.isAbove(price.ultimoPrecio, 0));
            });
        });
    });
    describe('#3 - getOptionsList()', () => { //J'ai mis le timetout à 10 secs
        it(`should return Options list data for Stock ${come.getBasicProperty('simbolo')}`, () => {
            return new AuthService().getToken().then((token) => {
                new StockService().getDataService().getOptionList(token, come).then((options) => assert.equal(options[0].tipo, 'OPCIONES')
                )
            })
        });
    });
    describe('#4 - getCallsList()', () => {
        it(`#4.1 - should return Calls list data for Stock ${come.getBasicProperty('simbolo')}`, () => {
            return new AuthService().getToken().then((token) => {
                new StockService().getDataService().getCallList(token, come).then((options) => assert.equal(options[0].tipo, 'OPCIONES')
                )
            })
        });
        it(`#4.2 - should return Puts list data for Stock ${come.getBasicProperty('simbolo')}`, () => {
            return new AuthService().getToken().then((token) => {
                new StockService().getDataService().getPutList(token, come).then((options) => assert.equal(options[0].tipo, 'OPCIONES')
                )
            })
        });
    });
});
