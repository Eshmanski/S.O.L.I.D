// Dependency Inversion Principle

// Вверхний уровень модулей не должен зависить от абстракций нижнего уровня.
// Любые уровни должны зависить от абстракций, а не конкретики.

/*
class Fetch {
    request(url) {
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStore = 'data from local storage';

        return dataFromLocalStore;;
    }
}

//  1.  В следствии изменения источника данных с сервера на локальное хранилище 
//      надо изменять класс.

class Database {
    constructor() {
        // 1 изменение
        // this.fetch = new Fetch();
        this.localStorage = new LocalStorage();
    }

    getData() {
        // 2 изменение
        // return this.fetch.request('vk.com');
        return this.localStorage.get('vk');
    }
}

const db = new Database();

console.log(db.getData());
*/

class Fetch {
    request(url) {
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStore = 'data from local storage';

        return dataFromLocalStore;;
    }
}
class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request('vk.com');
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet() {
        return this.localStorage.get();
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

const dbFetch = new Database(new FetchClient());
const dbLocalStorage = new Database(new LocalStorageClient());

console.log(dbFetch.getData('key'));
console.log(dbLocalStorage.getData('key'));