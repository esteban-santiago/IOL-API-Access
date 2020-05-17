class Token {
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
}
module.exports = { Token };