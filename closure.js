// function along its lexical scope is known as closure

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

console.log(x())