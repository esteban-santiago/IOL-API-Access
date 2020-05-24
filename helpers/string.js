'use strict';

class StringHelper {
    constructor() {

    }

    static replaceInUrl() {
        let url = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            url = url.replace('$' + i, arguments[i + 1]);
        }
        return url;
    }

}

export default StringHelper;
