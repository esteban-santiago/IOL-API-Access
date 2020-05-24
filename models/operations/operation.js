class Operation {
    constructor(basic) {
        this.basic = basic;
    }

    getBasicData() {
        return this.basic;
    }

    getBasicProperty(property) {
        return this.basic[property];
    }
}

export default Operation;