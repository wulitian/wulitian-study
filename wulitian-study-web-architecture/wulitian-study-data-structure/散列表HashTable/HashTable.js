function HashTable (){
    let table = [];
    let loseloseHashTable = function (key){
        let hash = 1234;
        for (let i = 0; i < key.length; i++){
            hash = hash*33 + key.codePointAt(i);
        }
        return hash % 333;
    };

    this.put = (key, value) => {
        let position = loseloseHashTable(key);
        table[position] = value;
    };

    this.get = (key) => {
        return table[loseloseHashTable(key)];
    };

    this.remove = (key) => {
        table[loseloseHashTable(key)] = undefined;
    }
}