import HTTPException from '../../../models/system/exceptions/http_exception.js';

class AccountServiceException extends HTTPException {
    constructor(code, description, statusCode, statusText) {
        super(code, description, statusCode, statusText);
    }
}

export default AccountServiceException;