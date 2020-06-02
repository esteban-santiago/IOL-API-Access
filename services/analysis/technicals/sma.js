import movingAverages from 'moving-averages';

const { ma } = movingAverages;

class SMA {
    constructor() {

    }

    getSMA(historicalPrice, sessions) {
        return ma(historicalPrice, sessions).map(
            (value => Math.round(value * 10000) / 10000 )
        );
    }
    
    getSMA20(historicalPrice) {
        return this.getSMA(historicalPrice, 20);
    }

    getSMA50(historicalPrice) {
        return this.getSMA(historicalPrice, 50);
    }

    getSMA200(historicalPrice) {
        return this.getSMA(historicalPrice, 200);
    }

}

export default SMA;