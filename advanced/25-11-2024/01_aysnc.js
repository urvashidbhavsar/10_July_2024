var myfunc = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res("function executed")
        }, 2000)
    })
}
console.log(myfunc())

// create using aysnc
var newfunc = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = 5;
            if (x == 5) {
                resolve("task done")
            }
            else {
                reject("not done")
            }
        }, 3000)
    })
    // .then(resolve => console.log(resolve))
    // .catch(reject => console.log(reject))
    let res = await promise;
    console.log(res);
}
newfunc();


var func = async () => {
    console.log("Last function executed");
    let f = await myfunc();
    console.log(f);
}
func()