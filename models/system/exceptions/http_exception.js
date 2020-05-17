let { Exception } = require('./exception');

class HTTPException extends Exception {
    constructor(name, message, statusCode, statusText) {
        super(name, message);
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
}

module.exports = { HTTPException };