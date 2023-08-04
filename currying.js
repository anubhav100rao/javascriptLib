function curring(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b)
        }
    }
}

function multiply(a, b) {
    return a * b
}

var curriedMultiply = curring(multiply)
console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));