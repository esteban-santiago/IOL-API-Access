'use strict';

require("dotenv").config();
let AuthClient = require("./dao/auth_client");
//let stock = require("./models/stocks/stock");
let { COME, MELI } = require("./models/stocks/stock");
//let StockClient = require('./dao/stock_client');

let come = new COME();
let meli = new MELI();

//console.log(stock);
console.log(come.getTicker());
console.log(meli.getTicker());

//console.log(stockClient);


//auth.getToken().then( response => console.log(response.data) );

//const come = new Stock('COME');

//console.log(come.getMercado());

//const auth = new AuthClient();

//auth.getToken().then( response => console.log(response.data) );

