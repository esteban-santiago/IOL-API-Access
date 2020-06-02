import movingAverages from 'moving-averages';

const { ema } = movingAverages;

class EMA {
    constructor() {

    }

    getEMA(historicalPrice, sessions) {
        return ema(historicalPrice, sessions).map(
            (value => Math.round(value * 10000) / 10000 )
        );
    }
    
    getEMA20(historicalPrice) {
        return this.getEMA(historicalPrice, 20);
    }

    getEMA50(historicalPrice) {
        return this.getEMA(historicalPrice, 50);
    }

    getEMA200(historicalPrice) {
        return this.getEMA(historicalPrice, 200);
    }

}

export default EMA;