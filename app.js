'use strict';

import AuthService from './services/auth/auth_service.js';
import COME from './models/stocks/come.js';
import MELI from './models/stocks/meli.js';
import StockService from './services/stocks/stock_service.js';
import SMA from './services/analysis/technicals/sma.js';
import EMA from './services/analysis/technicals/ema.js';
import {SupervisedLearning} from './services/machine_learning/machine_learning.js';


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
    //let stockDataService = new StockService().getDataService();;
    //let ti = new EMA();
    try {
        //token = await new AuthService().getToken();
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

        //Algebra.getLinearRegressionModel([[2, 5], [6, 7]]);
        //Algebra.getGradientDescentModel([[2, 5], [6, 7]]);

        //let points = [[2,5],[6,7], [1,3], [7,8], [8, 8],[9,9]];

        let points = [
        [5000, 160000], [5570, 189300], [4350, 139200], [7900, 260700],
        [6800, 217600], [5400, 183600], [6900, 234600], [3900, 136500], 
        [4200, 138600], [5780, 202300]
        ];

        //Algebra.computeErrorForGivenPoints()
        //console.log(gd);
        //console.log(oms);

        //console.log(Algebra.computeErrorForGivenPoints(points, gd[0], gd[1]));
        //console.log(Algebra.computeErrorForGivenPoints(points, oms[0], oms[1]));
        const sl = new SupervisedLearning();
        console.log(sl.getAccurateLRModel(points)(0));

        //  let history =
        //      await stockDataService.getXLastsMonthsHistoricalData(token, come, 6).then(
        //          (history => history.reverse().map(
        //              (stock => new Array(stock.fechaHora.split('T')[0], stock.ultimoPrecio))
        //          )));
        //  let ema20 =
        //      ti.getEMA20(history.map((seance => seance[1])));
        //  for (let i = 0; i < history.length; i++)
        //      history[i].push(ema20[i]);

        //  console.log(history.reverse());


    } catch (error) {
        console.error(error);
    } finally {
        return token;
    }
}