'use strict';

import AuthService from './services/auth/auth_service.js';
import COME from './models/stocks/come.js';
import GGAL from './models/stocks/ggal.js';
import PAMP from './models/stocks/pamp.js';
import OptionsToExecute from './services/analysis/options/options_to_execute.js';


main([new COME(), new GGAL(), new PAMP()]);

async function main(list) {
    let token;
    try {
        token = await new AuthService().getToken();
        list.map((item) => new OptionsToExecute().execute(token, item));
    } catch (error) { //Use catch to avoid -> Unhandled exception 
        console.error(error);
    } finally {
        return token;
    }
}