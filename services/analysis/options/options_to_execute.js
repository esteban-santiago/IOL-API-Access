'use strict';

import Stock from '../../../models/stocks/stock.js';
import NumberHelper from '../../../helpers/number.js';
import Analysis from './analysis.js';

import StockService from '../../../services/stocks/stock_service.js';


class OptionsToExecute extends Analysis {
    constructor() {
        super();
        this.stockDataService = new StockService().getDataService();
    }

    async execute(token, stock) {
        console.log(`Analysis launched for ${stock.getBasicProperty('simbolo')} at ${new Date()}`);
        return this.stockDataService.getPriceData(token, stock)
            .then((stockPrice) => 
                this.stockDataService.getCallList(token, stock)
                    .then(options => options.map((option) => {
                        this.stockDataService.getPriceBox(token, new Stock(option))
                            .then(
                                optionPrice => optionPrice.puntas.length > 0 && 
                                    this.businessRule(stock, option, optionPrice, stockPrice)
                            );
                    }
                    ))    
            );
        console.table(optionsToExecute);
        return optionsToExecute;
        //console.log(options.filter( option => option.cotizacion.puntas !== null ));
    }

    businessRule(stock, option, optionPrice, stockPrice) {
        if ( optionPrice.puntas[0].precioVenta > 0 && (stockPrice.ultimoPrecio > (NumberHelper.getFloatFromString(option.simbolo) + optionPrice.puntas[0].precioVenta))) {
            let delta = 1 - ((NumberHelper.getFloatFromString(option.simbolo) + optionPrice.puntas[0].precioVenta) / stockPrice.ultimoPrecio);
            console.log(`For ${stock.getBasicProperty('simbolo')} at $ ${stockPrice.ultimoPrecio}\nFound: ${option.simbolo} with Strike: ${NumberHelper.getFloatFromString(option.simbolo)} at $ ${optionPrice.puntas[0].precioVenta} => Delta: ${(delta * 100).toFixed(3)} %`);
            }
    }

    businessAction(stock, option, optionPrice, stockPrice) {
    }

}

export default OptionsToExecute;