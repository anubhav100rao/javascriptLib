// what are callback functions ?

setTimeout(function () {
    console.log("setTimeout accepts a callback function")
}, 1000)

function x(y) {
    y()
}


x(function y() {
    console.log("this function y() is callback function")
})

for(let i = 0; i < 10000000; ) {
    i++;
}

console.log("executed : this will execute before setTimeout even it takes more time then waiting time of setTimeout")

// javascript is a synchronous and single threaded language



// blocking the main thread

// power of callback -> world of asynchronous

// deep dive in event listeners

// closure demo

// scope with event listeners

// garbage collection