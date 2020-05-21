'use strict';

require("dotenv").config();
let auth = require('./services/auth/auth_service');
let { COME } = require('./models/stocks/come');
let { MELI } = require('./models/stocks/meli');
let { StockService } = require('./services/stocks/stock_service');
let { OperationService } = require('./services/system/operation_service');

let come = new COME();

//let ccome = new StockClient(come);

//let come = new StockService(new COME());
//let auth = new AuthClient();

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


//auth.getToken().then( response => console.log(response.getAccess()) );
//Use catch to avoid -> Unhandled exception 
//auth.getToken().then(token => console.log(token)).catch(exception => console.error(exception));




//getToken();


async function getToken() {
    let token;
    let ccome;
    try {
        token = await auth.getToken();
        console.log(token);
        //console.log( await StockService.getBasicData(token, come) );
        //console.log(await StockService.getPriceData(token, come));
        //console.log( await StockService.getOptionsList(token, come));
        //console.log(await OperationService.buy(token, come, 100, 2, new Date())) ;
        //console.log(await OperationService.getBasicData(token, 23205311));
        //console.log(await OperationService.cancel(token, 23205311));
    } catch (error) {
        console.error(error);
    } finally {
        return token;
    }
}