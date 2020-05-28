'use strict';

import AuthService from './services/auth/auth_service.js';
import COME from './models/stocks/come.js';
import MELI from './models/stocks/meli.js';
import StockService from './services/stocks/stock_service.js';
import TechnicalIndicators from './services/analysis/technicals/technical_indicators.js';


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
    let stockDataService = new StockService().getDataService();;
    let ti = new TechnicalIndicators();
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

        
        let history =
            await stockDataService.getXLastsMonthsHistoricalData(token, come, 12).then(
                (history => history.reverse().map(
                    (stock => new Array(stock.fechaHora.split('T')[0], stock.ultimoPrecio))
                )));
        
        let sma20 =
            ti.getSMA50(await stockDataService.getXLastsMonthsHistoricalData(token, come, 12).then(
                (history => history.reverse().map(
                    (stock => stock.ultimoPrecio)
                ))
            ));
        for (let i = 0; i < history.length; i++)
            history[i].push(sma20[i]);

        history.map(
            (element, index, elements) => {
                if (index < elements.length - 1)
                    elements[index].push(
                        Math.sqrt( Math.pow(elements[index][2],2) )
                        > 
                        Math.sqrt( Math.pow(elements[index + 1][2],2) )
                    )
            }
        );

        console.log(history);

        for (let index = 0 ; index < history.length-1 ; index++) {
            if(history[index][3] != history[index+1][3])
                console.log('Changement de tendence: ' + history[index][0])
        }        



    } catch (error) {
        console.error(error);
    } finally {
        return token;
    }
}