const dbl = window.indexedDB;

class Function {
    constructor() {
        this._name = 'LARAPLAY_DB';
        this.version = 1;
        this.db = null;
        this.store = null;
    }
    createDB() {
        if(typeof dbl === 'object') {
            const openRequest = dbl.open(this._name, this.version);

            openRequest.onupgradeneeded = (event) => {
                // triggers if the client had no database
                // ...perform initialization...
                this.db = openRequest.result;

                if (event.oldVersion < 1) {
                    // We'll create a new "things" store with `autoIncrement`ing keys
                    this.store = this.db.createObjectStore('settings', { autoIncrement: true });
                } else if (event.oldVersion < 2) {
                    openRequest.deleteObjectStore('settings');
                    this.store = openRequest.transaction.objectStore('settings');

                    openRequest.createIndex('settings', 'name');
                }
            };

            openRequest.onerror = (error) => {
                return error._send({
                    className: 'r',
                    methodName: 'get',
                    stack: error
                });
            };

            openRequest.onsuccess = function() {
                this.db = openRequest.result;
                console.log('sda');
            };
        }
    }
    getDB() {
        this.version = 2;
    }
    addDB(data) {
        this.version = 2;

    }
}

export default new Function;
