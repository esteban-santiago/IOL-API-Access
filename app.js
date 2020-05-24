'use strict';

import AuthService from './services/auth/auth_service.js';
import COME from './models/stocks/come.js';
import MELI from './models/stocks/meli.js';
import StockService from './services/stocks/stock_service.js';


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





getToken();


async function getToken() {
    let token;
    let ccome;
    //let stockService = new StockService();
    let stockDataService = new StockService().getDataService();;

    try {
        token = await new AuthService().getToken();
        //console.log(token);
        //console.log( await StockDataService.getBasicData(token, come) );
        //console.log(await StockDataService.getPriceData(token, come));
        //console.log( await StockDataService.getOptionList(token, come));
        //console.log(await StockOperationService.buy(token, come, 100, 2, new Date())) ;
        //console.log(await StockOperationService.getBasicData(token, 23205311));
        //console.log(await StockOperationService.cancel(token, 23205311));
        //let options = await StockDataService.getOptionList(token, come);
        //options.filter(
        //    (e) => e.simbolo.substring(3,4) === 'V' ? e : null
        //);

        console.log ( await stockDataService.getBasicData(token, come) );

    } catch (error) {
        console.error(error);
    } finally {
        return token;
    }
}