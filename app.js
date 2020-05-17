'use strict';

require("dotenv").config();
let AuthClient = require("./dao/auth_client");
//let stock = require("./models/stocks/stock");
let { COME, MELI } = require("./models/stocks/stock");
let StockClient = require('./dao/stock_client');

let come = new COME();
let ccome = new StockClient(come);

let auth = new AuthClient();
// ccome.getBasicData('token')
//     .then(
//         resp => {
//             try {
//                 console.log(resp.body.data);
//             } catch(error) { 
//                 console.error('Un error ha ocurrido: ' + error);
//             }
//         }
//     );
//console.log(stockClient);


//auth.getToken().then( response => console.log(response.data) );
auth.getToken().then(token => console.log(token)
).catch(exception => console.error(exception));
//let authExc = require('./models/system/exceptions/auth_client_exception');

//throw new authExc.AuthClientException('400','45454');
