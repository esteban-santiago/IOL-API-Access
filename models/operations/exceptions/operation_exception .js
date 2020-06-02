import Exception from '../../system/exceptions/exception.js';

export default class OperationException extends Exception {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }

    getName() {
        return this.name;
    }

    getMessage() {
        return this.Message;
    }
}
