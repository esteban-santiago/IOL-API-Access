'use strict';

require("dotenv").config();
const AuthClient = require("./dao/auth_client");
const Stock = require("./services/stock");



//auth.getToken().then( response => console.log(response.data) );

//const come = new Stock('COME');

//console.log(come.getMercado());

const auth = new AuthClient();

auth.getToken().then( response => console.log(response.data) );
