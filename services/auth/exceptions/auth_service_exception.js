let { HTTPException } = require('../../../models/system/exceptions/http_exception');

class AuthServiceException extends HTTPException {
    constructor(code, description, statusCode, statusText) {
        super(code, description, statusCode, statusText);
    }
}

module.exports = { AuthServiceException };