// even number
var num = [2, 4, 7, 22, 21, 34, 9, 11, 1, 3];
var res = num.filter((n) => n % 2 == 0)
console.log(res);

var res = num.filter((n) => n % 2 != 0)
console.log(res);

var res = num.filter((n) => (n % 2 != 0 && n % 3 != 0))
console.log(res);
