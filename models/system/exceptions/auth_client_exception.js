let { HTTPException } = require('./http_exception');

class AuthClientException extends HTTPException {
    constructor(code, description, statusCode, statusText) {
        super(code, description, statusCode, statusText);
    }
}

module.exports = { AuthClientException };