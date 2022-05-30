// Everything is executed in execution context in javascript
// JavaScript running context
// stack data structure is used to implement execution context

foo();
function foo() {
    console.log("foo");
}

var n = 10;

function square(num) {
    var ans = num * num
    return ans
}

var square10 = square(10)
var square4 = square(4)

console.log(square10)
console.log(square4)

