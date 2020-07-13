'use strict';

import AuthService from './services/auth/auth_service.js';
import COME from './models/stocks/come.js';
import GGAL from './models/stocks/ggal.js';
import PAMP from './models/stocks/pamp.js';
import EDN from './models/stocks/edn.js';
import VALO from './models/stocks/valo.js';
import ALUA from './models/stocks/alua.js';

import OptionsToExecute from './services/analysis/options/options_to_execute.js';
import StockService from './services/stocks/stock_service.js';

const stockService = new StockService().getDataService(); 

main([new COME(), new GGAL(), new PAMP(), new EDN(), new VALO(), new ALUA()] );

async function main(list) {

    let token;
    let optionsToExecute;
    try {
        optionsToExecute = new AuthService().getToken()
            .then(
                (token) => list.map((item) => new OptionsToExecute().execute(token, item)) 
            );
        //console.table(optionsToExecute);
    } catch (error) { //Use catch to avoid -> Unhandled exception 
        console.error(error);
    } finally {
        return token;
    }

}