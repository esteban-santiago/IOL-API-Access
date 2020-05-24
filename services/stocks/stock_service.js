//Ce sera le papa de tous les services. Je vais utiliser le pattern Singleton pour ne 
//donner qu'une seule instance de chaque objet
import StockDataService from './stock_data_service.js';
import StockOperationService from './stock_operation_service.js';

class StockService {
    constructor() {
        if (StockService.instance instanceof StockService) {
            return StockService.instance;
        }
        this.stockService = {
            'data': new StockDataService(),
            'operation': new StockOperationService()
        };
        Object.freeze(this.stockService);
        Object.freeze(this);
        StockService.instance = this;
    }

    getInstance(object) {
        return this.stockService[object];
    }

    getDataService(){
        return this.getInstance('data');
    }

    getOperationService(){
        return this.getInstance('operation');
    }
}

export default StockService;