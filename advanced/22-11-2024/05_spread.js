function numbers(...num) {
    var res = num.reduce((current, index) => current + index, 0)
    console.log(res);
}
numbers(4, 3, 5, 22, 33, 2)
numbers(11, 22, 33, 44, 55)