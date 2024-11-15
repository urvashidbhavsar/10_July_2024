const myfunc = (() => {
    let str = "Hello world"

    return function () {
        return str;
    }
})()
console.log(myfunc())