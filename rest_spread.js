function extractingArgs(...args) {
    // for(arg of args) {
    //     console.log(arg);
    // }
    res = args.forEach(arg => console.log(arg))
    console.log(res) // res is undefined
    res = args.map(arg => {
        arg++;
        return arg;
    })
    console.log(res) // this returns modified args
}

extractingArgs(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)