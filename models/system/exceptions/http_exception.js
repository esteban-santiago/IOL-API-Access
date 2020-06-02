import Exception from './exception.js';

class HTTPException extends Exception {
    constructor(name, message, statusCode, statusText) {
        super(name, message);
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
}

export default HTTPException;