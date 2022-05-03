// Symbol.asyncIterator::异步可迭代
!(function () {
    const obj = new Object();
    obj[Symbol.asyncIterator] = async function* () {
        yield "hello";
        yield "async";
        yield "iteration!";
    };
    console.log(obj);
    (async () => {
        for await (const x of obj) {
            console.log(x);
        }
    })();
})()

// Symbol.hasInstance::重写instanceof
!(function () {
    class Array1 {
        static [Symbol.hasInstance](instance) {
            console.log(1231);
            return Array.isArray(instance);
        }
    }

    console.log(Array instanceof Array1)
})()

// Symbol.isConcatSpreadable::配置Array.prototype.concat()方法的参数
!(function () {
    const arr1 = ['1', '2', '3'];
    const arr2 = ['a', 'b', 'c'];
    let a = arr1.concat(arr2);
    console.log(a)
    arr1[Symbol.isConcatSpreadable] = false;
    let b = arr1.concat(arr2);
    console.log(b)

    // 类数组
    const arrayLike = {
        [Symbol.isConcatSpreadable]: true,
        length: 2,
        0: '张三',
        1: 23
    }
    let c = arr2.concat(arrayLike);
    console.log(c)

})()

// Symbol.iterator 迭代器
!(function () {
    const myIterator = {};
    myIterator[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    for (const myIteratorElement of myIterator) {
        console.log(myIteratorElement);
    }
})()

// Symbol.match::指定了匹配的是正则表达式而不是字符串。String.prototype.match() 方法会调用此函数。
!(function () {
    const reg = /foo/;
    reg[Symbol.match] = false;
    console.log('/foo/'.startsWith(reg));
    console.log('/baz/'.endsWith(reg));
})()

// Symbol.matchAll::返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 String.prototype.matchAll() 方法调用。
!(function () {
    const re = /[0-9]+/g;
    const str = '2016-01-02|2019-03-07';
    const result = re[Symbol.matchAll](str);
    console.log(result);
    console.log(Array.from(result, x => x[0]));
})()

const object1 = {
    property1: 42
};

object1[Symbol.unscopables] = {
    property1: true
};
console.log(object1)
with (object1) {
    console.log(property1);
    // expected output: Error: property1 is not defined
}
