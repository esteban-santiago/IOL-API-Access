let { Exception } = require('../../system/exceptions/exception');

class OperationException {
    constructor(name, message) {
        this.name = name;
        this.message = message
    }

    getName() {
        return this.name;
    }

    getMessage() {
        return this.Message;
    }
}

module.exports = { OperationException };