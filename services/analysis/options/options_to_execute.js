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

    execute(token, stock) {
        console.log(`Analysis launched for ${stock.getBasicProperty('simbolo')} at ${new Date()}`);
        return this.stockDataService.getPriceData(token, stock)
                .then((stockPrice) => {
                    //console.log(`At ${Date()}\nFor ${stock.getBasicProperty('simbolo')} => $ ${stockPrice.ultimoPrecio}`);
                    this.stockDataService.getCallList(token, stock)
                        .then(options => options.map((option) => {
                            this.stockDataService.getPriceBox(token, new Stock(option))
                                .then(
                                    optionPrice => {
                                        if ((optionPrice.puntas.length > 0 && optionPrice.puntas[0].precioVenta > 0)
                                            && (stockPrice.ultimoPrecio > (NumberHelper.getStrikeFromName(option.simbolo) + optionPrice.puntas[0].precioVenta))) {
                                                let delta = 1 - ((NumberHelper.getStrikeFromName(option.simbolo) + optionPrice.puntas[0].precioVenta) / stockPrice.ultimoPrecio);
                                                console.log(`For ${stock.getBasicProperty('simbolo')} at $ ${stockPrice.ultimoPrecio}\nFound: ${option.simbolo} with Strike: ${NumberHelper.getStrikeFromName(option.simbolo)} at $ ${optionPrice.puntas[0].precioVenta} => Delta: ${(delta * 100).toFixed(3)} %`);
                                        }
                                    }
                                );
                        }
                        ))
                }
                );
        //console.log(options.filter( option => option.cotizacion.puntas !== null ));
    }
}

export default OptionsToExecute;