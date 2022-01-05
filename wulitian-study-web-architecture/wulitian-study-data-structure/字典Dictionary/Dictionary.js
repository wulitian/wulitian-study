function dictionary (){
    let items = {};

    this.has = (key) => {
        return key in items;
    };
    this.set = (key, value) =>{
      items[key] = value;
    };
    this.remove = (key) =>{
        if(items.has(key)){
            delete items[key];
            return true;
        }
        return false;
};
    this.get = (key) => {
        return this.has(key) ? items[key] : undefined;
    };
    this.values = () => {
        let values = [];
        for(let key in items ){
            values.push(items[key]);
        }
        return values;
    };
    this.getItems = () => {
        return items;
    }
}
