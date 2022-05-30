getName()
console.log(x)
console.log(getName)

var x = 10

// this is pure function and treated as actual code in initial rendering
function getName() {
    console.log("Nameste Javascript")
}

// this is just a variable and treated as undefined in initial rendering
const arrow = () => {
    console.log("Nameste Javascript from arrow function")
}