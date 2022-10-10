class Storage {
    constructor() {
        this.database = localStorage;
    }

    get(key) {
        const result = this.database.getItem(key);
        try {
            const parsedResult = JSON.parse(result);
            return parsedResult;
        } catch {
            return result;
        }
    }

    set(key, value) {
        try {
            this.database.setItem(key, JSON.stringify(value));
        } catch {
            throw new Error('U have bad key-value pair for storage');
        }
    }
}

const storage = new Storage();

export { storage };
