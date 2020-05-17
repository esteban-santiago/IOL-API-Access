class Exception {
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

module.exports = { Exception };