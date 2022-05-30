
function fun() {
    foo();
    function foo() {
        console.log(a);
    }
}



fun(); // undefined

var a = 10;


fun(); // 10 will be printed