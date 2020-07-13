'use strict';

class NumberHelper {
    constructor() {

    }

    static getFloatFromString(name) {
        return parseFloat(name.substring(4));
    }

}

export default NumberHelper;
