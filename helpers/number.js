'use strict';

class NumberHelper {
    constructor() {

    }

    static getStrikeFromName(name) {
        return parseFloat(name.substring(4));
    }

}

export default NumberHelper;
