// addition. 
// hide functionality of addition
function addition(a, b) {
    this.a = a
    this.b = b
    throw new Error("cant enabled for addition")
}
addition.prototype.newval = function () {
    console.log(this.a + this.b)
}
// create functionality of call abtract class
function twoNumbers(x, y) {
    this.a = x;
    this.b = y;
}
// create prototype of abstract class
twoNumbers.prototype = Object.create(addition.prototype)
var sum = new twoNumbers(5, 6)
sum.newval()
// console.log(sum.newval());