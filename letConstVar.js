// let and const are hoisted in temporal dead zone
// var is hoisted in global space


let a = 10;
var b = 100;
console.log(this.b);
console.log(this.a);