// Set
!(function () {
    let set = new Set([1, 2, 3, 4]);
    let set2 = new Set({
        [Symbol.iterator]: function* () {
            yield 1;
            yield 2;
            yield 3;
        }
    });
    console.log(set2)
    set.add(5).delete(2);
    console.log(set.has(2))
    console.log(set.size)
    console.log(set);
    set.forEach((val, e) => {
        console.log(val)
        console.log(e)
    })
    for (let pair of set.keys()) {
        console.log(pair);
    }
    for (let pair of set.values()) {
        console.log(pair);
    }
    for (let pair of set.entries()) {
        console.log(pair);
    }
})()

// WeakSet
!(function () {
    const container = {};
    let weakSet = new WeakSet();
    weakSet.add(container)
    console.log(weakSet.has(container))
    console.log(weakSet)
})()

// Map
!(function () {
    let map = new Map([['a', '1'], ['b', '2']]);
    let map2 = new Map({
        [Symbol.iterator]: function* () {
            yield ["a", "1"];
            yield ["b", "2"];
            yield ["c", "3"];
        }
    });
    console.log(map2)
    map.set("c", "3");
    console.log(map.has("c"))
    console.log(map)
    map.forEach((key, val) => {
        console.log(key);
        console.log(val);
    })
    for (const mapElement of map.entries()) {
        console.log(mapElement)
    }
    for (const mapElement of map.keys()) {
        console.log(mapElement)
    }
    for (const mapElement of map.values()) {
        console.log(mapElement)
    }
})()

