function x() {

    for(let i = 0; i<5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * (i + 1))
    }


    for(var i = 1; i <= 5; i++) {
        function foo(num) {
            setTimeout(() => {
                console.log(num)
            }, 1000 * i);
        }
        foo(i)
    }
    
    console.log("Javascript")
}

x();