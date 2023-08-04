interface Foo {
    [key: string]: number;
}

 
let foo:Foo = {};
foo['hello'] = 123;
foo = {
    'leet': 1337,
    'foo': 123,
    'anubhav': 1234,
    'prasoon': 1233
};
console.log(foo['leet']); // 1337
console.log(foo['foo']); // 123
console.log(foo)

