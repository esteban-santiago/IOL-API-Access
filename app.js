'use strict';

require("dotenv").config();
let AuthClient = require('./dao/auth_client');
let { COME } = require('./models/stocks/come');
let { MELI } = require('./models/stocks/meli');
let { StockService } = require('./services/stock_service');

//let come = new COME();
//let ccome = new StockClient(come);

let come = new StockService(new COME());
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


auth.getToken().then( response => console.log(response.getAccess()) );
//auth.getToken().then(token => console.log(token)).catch(exception => console.error(exception));

//getToken();

//console.log(new COME().getBasicProperty('simbolo'));

async function getToken() {
    let token;
    let ccome;
    try {
        token = await auth.getToken();
        //console.log( await come.getBasicData(token) ) ;
        console.log( await come.getPriceData(token));
        //console.log( await come.getOptionsList(token));
        //await come.buy(token, 100, 2, new Date()) ;
    } catch (error) {
        console.error(error);
    } finally {
        return token;
    }
}