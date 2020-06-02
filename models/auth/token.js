export default class Token {
    constructor(access, refresh) {
        this.access = access;
        this.refresh = refresh;
    }

    getAccess() {
        return this.access;
    }

    getRefresh() {
        return this.refresh;
    }

    validateToken() {
        //not yet implemented
        return true;
    }
}