let { HTTPException } = require('./http_exception');

class StockClientException extends HTTPException {
    constructor(code, description, statusCode, statusText) {
        super(code, description, statusCode, statusText);
    }
}

module.exports = { StockClientException };