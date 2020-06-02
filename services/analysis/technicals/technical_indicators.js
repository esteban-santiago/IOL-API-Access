'use strict';
//Not yet implemented!!!
class TechnicalIndicators {
    constructor() {

    }
    async getTrendLine(_history) {
        let history =
            await stockDataService.getXLastsMonthsHistoricalData(token, come, 6).then(
                (history => history.reverse().map(
                    (stock => new Array(stock.fechaHora.split('T')[0], stock.ultimoPrecio))
                )));
        let sma20 =
            ti.getSMA20(await stockDataService.getXLastsMonthsHistoricalData(token, come, 12).then(
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

        for (let index = 0 ; index < history.length-1 ; index++) {
            if(history[index][3] != history[index+1][3])
                console.log('Changement de tendence: ' + history[index][0])
        }        
    }

}

export default TechnicalIndicators;