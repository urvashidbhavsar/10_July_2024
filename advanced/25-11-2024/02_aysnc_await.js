const myfunc = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 2000);
    })
}
console.log(myfunc());

// ================================== 
const newfunc = async () => {
    return "Hello world"
}
newfunc().then(resolve => console.log(resolve))

// ========================================
const newfunc1 = async () => {
    var str = "Hello world!!!!!!";
    var wait = await myfunc();
    // var newstr = setTimeout(() => {
    console.log(str);
    console.log(wait);
    // }, 2000);
}
newfunc1();


